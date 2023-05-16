import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostProvider, Provider } from 'renderer/interfaces';
import { store } from '../store/store';

const url = 'http://localhost:4001/api/v1/';

export const providersApi = createApi({
  reducerPath: 'providersApi',
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
  tagTypes: ['Providers'],
  endpoints: (builder) => ({
    getProviders: builder.query<{ providers: Provider[] }, null>({
      query: () => `providers`,
      providesTags: ['Providers'],
    }),
    getSingleProvider: builder.query<{ provider: Provider }, String>({
      query: (id: string) => `providers/${id}`,
    }),
    createProvider: builder.mutation<{ provider: Provider }, PostProvider>({
      query: (provider) => ({
        url: 'providers',
        method: 'POST',
        body: provider,
      }),
      invalidatesTags: ['Providers'],
    }),
    updateProvider: builder.mutation<
      { provider: Provider },
      { id: string; provider: PostProvider }
    >({
      query: ({ id, provider }) => ({
        url: `providers/${id}`,
        method: 'PATCH',
        body: provider,
      }),
      invalidatesTags: ['Providers'],
    }),
    deleteProvider: builder.mutation<null, String>({
      query: (id: string) => ({
        url: `providers/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Providers'],
    }),
  }),
});

export const {
  useGetProvidersQuery,
  useGetSingleProviderQuery,
  useCreateProviderMutation,
  useUpdateProviderMutation,
  useDeleteProviderMutation,
} = providersApi;
