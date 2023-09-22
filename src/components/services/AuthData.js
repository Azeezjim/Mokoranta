import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mymakaranta-stage-d3ceb7bb88b8.herokuapp.com/api/' }),
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => `users/profile`,
    }),
    registration: build.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (body) => ({
        url: `auth/register`,
        method: 'POST',
        body: body,
      }),
      
    }),

    login: build.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (body) => ({
        url: `auth/login`,
        method: 'POST',
        body: body,
      }),
      
    }),

    forgotPassword: builder.query({
      query: (email) => `users/profile/${email}`,
    }),
      }),
  
})


export const { useGetUserProfileQuery,useRegistrationMutation, useLoginMutation, useGetForgotPasswordQuery } = usersApi


