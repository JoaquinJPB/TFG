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
    addMovie: builder.mutation({
      query: (payload) => ({
        url: "movies/add",
        method: "POST",
        body: payload,
      }),
    }),
    deleteMovie: builder.mutation({
      query: (payload) => ({
        url: `movies/${payload}`,
        method: "DELETE",
        body: payload,
      }),
    }),
    getBooks: builder.query({
      query: () => ({
        url: "books",
      }),
    }),
    addBook: builder.mutation({
      query: (payload) => ({
        url: "books/add",
        method: "POST",
        body: payload,
      }),
    }),
    deleteBook: builder.mutation({
      query: (payload) => ({
        url: `books/${payload}`,
        method: "DELETE",
        body: payload,
      }),
    }),
    getVideogames: builder.query({
      query: () => ({
        url: "videogames",
      }),
    }),
    addVideogame: builder.mutation({
      query: (payload) => ({
        url: "videogames/add",
        method: "POST",
        body: payload,
      }),
    }),
    deleteVideogame: builder.mutation({
      query: (payload) => ({
        url: `videogames/${payload}`,
        method: "DELETE",
        body: payload,
      }),
    }),
    getMeditations: builder.query({
      query: () => ({
        url: "meditations",
      }),
    }),
    addMeditation: builder.mutation({
      query: (payload) => ({
        url: "meditations/add",
        method: "POST",
        body: payload,
      }),
    }),
    deleteMeditation: builder.mutation({
      query: (payload) => ({
        url: `meditations/${payload}`,
        method: "DELETE",
        body: payload,
      }),
    }),
    getBreaths: builder.query({
      query: () => ({
        url: "breaths",
      }),
    }),
    addBreath: builder.mutation({
      query: (payload) => ({
        url: "breaths/add",
        method: "POST",
        body: payload,
      }),
    }),
    deleteBreath: builder.mutation({
      query: (payload) => ({
        url: `breaths/${payload}`,
        method: "DELETE",
        body: payload,
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
        url: `advice/${payload}`,
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
    }),
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
  useAddMovieMutation,
  useAddBookMutation,
  useAddVideogameMutation,
  useGetAdviceQuery,
  useAddAdviceMutation,
  useAddBreathMutation,
  useAddMeditationMutation,
  useUpdateAdviceMutation,
  useDeleteAdviceMutation,
  useDeleteBreathMutation,
  useDeleteMeditationMutation,
  useDeleteMovieMutation,
  useDeleteBookMutation,
  useDeleteVideogameMutation
} = apiSlice
