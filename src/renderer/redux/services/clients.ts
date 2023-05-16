import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostClient, Client } from 'renderer/interfaces';
import { store } from '../store/store';

const url = 'http://localhost:4001/api/v1/';

export const clientsApi = createApi({
  reducerPath: 'clientsApi',
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
  tagTypes: ['Clients'],
  endpoints: (builder) => ({
    getClients: builder.query<{ clients: Client[] }, null>({
      query: () => `clients`,
      providesTags: ['Clients'],
    }),
    getSingleClient: builder.query<{ Client: Client }, String>({
      query: (id: string) => `clients/${id}`,
    }),
    createClient: builder.mutation<{ Client: Client }, PostClient>({
      query: (Client) => ({
        url: 'clients',
        method: 'POST',
        body: Client,
      }),
      invalidatesTags: ['Clients'],
    }),
    updateClient: builder.mutation<
      { Client: Client },
      { id: string; Client: PostClient }
    >({
      query: ({ id, Client }) => ({
        url: `clients/${id}`,
        method: 'PATCH',
        body: Client,
      }),
      invalidatesTags: ['Clients'],
    }),
    deleteClient: builder.mutation<null, String>({
      query: (id: string) => ({
        url: `clients/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Clients'],
    }),
  }),
});

export const {
  useGetClientsQuery,
  useGetSingleClientQuery,
  useCreateClientMutation,
  useUpdateClientMutation,
  useDeleteClientMutation,
} = clientsApi;
