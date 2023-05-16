import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostVehicle, Vehicle } from 'renderer/interfaces';
import { store } from '../store/store';

const url = 'http://localhost:4001/api/v1/';

export const vehiclesApi = createApi({
  reducerPath: 'vehiclesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers) => {
      const token = store.getState().user.user._id;

      if (token) {
        headers.set('x_api_user_id', token);
        return headers;
      }
      return headers;
    },
  }),
  tagTypes: ['Vehicles'],
  endpoints: (builder) => ({
    getVehicles: builder.query<{ vehicles: Vehicle[] }, null>({
      query: () => `vehicles`,
      providesTags: ['Vehicles'],
    }),
    getSingleVehicle: builder.query<{ vehicle: Vehicle }, String>({
      query: (id: string) => `vehicles/${id}`,
    }),
    createVehicle: builder.mutation<{ vehicle: Vehicle }, PostVehicle>({
      query: (vehicle) => ({
        url: 'vehicles',
        method: 'POST',
        body: vehicle,
      }),
      invalidatesTags: ['Vehicles'],
    }),
    updateVehicle: builder.mutation<
      { vehicle: Vehicle },
      { id: string; vehicle: PostVehicle }
    >({
      query: ({ id, vehicle }) => ({
        url: `vehicles/${id}`,
        method: 'PATCH',
        body: vehicle,
      }),
      invalidatesTags: ['Vehicles'],
    }),
    deleteVehicle: builder.mutation<null, String>({
      query: (id: string) => ({
        url: `vehicles/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Vehicles'],
    }),
  }),
});

export const {
  useGetVehiclesQuery,
  useGetSingleVehicleQuery,
  useCreateVehicleMutation,
  useUpdateVehicleMutation,
  useDeleteVehicleMutation,
} = vehiclesApi;
