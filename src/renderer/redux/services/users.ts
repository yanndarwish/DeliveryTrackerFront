import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostUser, User } from 'renderer/interfaces';

const url = 'http://localhost:4001/api/v1/';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<{ users: User[] }, null>({
      query: () => `users`,
      providesTags: ['Users'],
    }),
    getSingleUser: builder.query<{ user: User }, String>({
      query: (id: String) => `users/${id}`,
    }),
    createUser: builder.mutation<{ user: User }, PostUser>({
      query: (user) => ({
        url: 'users',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),
    updateUser: builder.mutation<
      { user: User },
      { id: String; user: PostUser }
    >({
      query: ({ id, user }) => ({
        url: `users/${id}`,
        method: 'PATCH',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),
    deleteUser: builder.mutation<null, String>({
      query: (id: String) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetSingleUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;
