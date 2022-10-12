import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => ({
        url: "movies",
      }),
    }),
    getBooks: builder.query({
      query: () => ({
        url: "books",
      }),
    }),
    getVideogames: builder.query({
      query: () => ({
        url: "videogames",
      }),
    }),
    getMeditations: builder.query({
      query: () => ({
        url: "meditations",
      }),
    }),
    getBreaths: builder.query({
      query: () => ({
        url: "breaths",
      }),
    }),
    signIn: builder.mutation({
      query: (payload) => ({
        url: "auth/signin",
        method: "POST",
        body: payload,
      }),
    }),
    signUp: builder.mutation({
      query: (payload) => ({
        url: "auth/signup",
        method: "POST",
        body: payload,
      }),
    }),
    getAdvice: builder.query({
      query: () => ({
        url: "advice",
      }),
    }),
    addAdvice: builder.mutation({
      query: (payload) => ({
        url: "advice/add",
        method: "POST",
        body: payload,
      }),
    }),
    deleteAdvice: builder.mutation({
      query: (payload) => ({
        url: "advice/add",
        method: "DELETE",
        body: payload,
      }),
    }),
    updateAdvice: builder.mutation({
      query: (payload) => ({
        url: "advice/add",
        method: "PATCH",
        body: payload,
      }),
    })
  }),
})

export const {
  useGetBooksQuery,
  useGetMoviesQuery,
  useGetVideogamesQuery,
  useGetMeditationsQuery,
  useGetBreathsQuery,
  useSignInMutation,
  useSignUpMutation,
  useGetAdviceQuery,
  useAddAdviceMutation,
  useUpdateAdviceMutation,
  useDeleteAdviceMutation,
} = apiSlice
