import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => ({
        url: "movies"
      }),
    }),
    getBooks: builder.query({
      query: () => ({
        url: "books"
      }),
    }),
    getVideogames: builder.query({
      query: () => ({
        url: "videogames"
      }),
    }),
    login: builder.mutation({
      query: (payload) => ({
        url: "auth/signin",
        method: 'POST',
        body: payload,
      }),
    }),
    signUp: builder.query({
      query: () => ({
        url: "auth/signup"
      }),
    }),
  }),
})

export const { useGetBooksQuery, useGetMoviesQuery, useGetVideogamesQuery, useLoginMutation, useSignUpQuery } = apiSlice
