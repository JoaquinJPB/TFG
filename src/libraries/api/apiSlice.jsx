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
  }),
})

export const { useGetBooksQuery, useGetMoviesQuery } = apiSlice
