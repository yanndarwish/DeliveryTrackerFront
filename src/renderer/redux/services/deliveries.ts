import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostDelivery, Delivery, DeliveryParams } from 'renderer/interfaces';
import { store } from '../store/store';

const url = 'http://localhost:4001/api/v1/';

export const deliveriesApi = createApi({
  reducerPath: 'deliveriesApi',
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
  tagTypes: ['Deliveries'],
  endpoints: (builder) => ({
    getDeliveries: builder.query<{ deliveries: Delivery[] }, DeliveryParams>({
      query: (arg) => {
        console.log(arg);
        return {
          url: `deliveries/`,
          params: arg,
        };
      },
      providesTags: ['Deliveries'],
    }),
    getSingleDelivery: builder.query<{ delivery: Delivery }, String>({
      query: (id: string) => `deliveries/${id}`,
    }),
    createDelivery: builder.mutation<{ delivery: Delivery }, PostDelivery>({
      query: (delivery) => ({
        url: 'deliveries',
        method: 'POST',
        body: delivery,
      }),
      invalidatesTags: ['Deliveries'],
    }),
    updateDelivery: builder.mutation<
      { delivery: Delivery },
      { id: string; delivery: PostDelivery }
    >({
      query: ({ id, delivery }) => ({
        url: `deliveries/${id}`,
        method: 'PATCH',
        body: delivery,
      }),
      invalidatesTags: ['Deliveries'],
    }),
    deleteDelivery: builder.mutation<null, String>({
      query: (id: string) => ({
        url: `deliveries/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Deliveries'],
    }),
  }),
});

export const {
  useGetDeliveriesQuery,
  useGetSingleDeliveryQuery,
  useCreateDeliveryMutation,
  useUpdateDeliveryMutation,
  useDeleteDeliveryMutation,
} = deliveriesApi;
