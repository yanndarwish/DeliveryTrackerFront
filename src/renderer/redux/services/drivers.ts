import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostDriver, Driver } from 'renderer/interfaces';
import { store } from '../store/store';

const url = 'http://localhost:4001/api/v1/';

export const driversApi = createApi({
  reducerPath: 'driversApi',
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
  tagTypes: ['Drivers'],
  endpoints: (builder) => ({
    getDrivers: builder.query<{ drivers: Driver[] }, null>({
      query: () => `drivers`,
      providesTags: ['Drivers'],
    }),
    getSingleDriver: builder.query<{ Driver: Driver }, String>({
      query: (id: string) => `drivers/${id}`,
    }),
    createDriver: builder.mutation<{ Driver: Driver }, PostDriver>({
      query: (Driver) => ({
        url: 'drivers',
        method: 'POST',
        body: Driver,
      }),
      invalidatesTags: ['Drivers'],
    }),
    updateDriver: builder.mutation<
      { Driver: Driver },
      { id: string; Driver: PostDriver }
    >({
      query: ({ id, Driver }) => ({
        url: `drivers/${id}`,
        method: 'PATCH',
        body: Driver,
      }),
      invalidatesTags: ['Drivers'],
    }),
    deleteDriver: builder.mutation<null, String>({
      query: (id: string) => ({
        url: `drivers/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Drivers'],
    }),
  }),
});

export const {
  useGetDriversQuery,
  useGetSingleDriverQuery,
  useCreateDriverMutation,
  useUpdateDriverMutation,
  useDeleteDriverMutation,
} = driversApi;
