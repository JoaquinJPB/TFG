import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem("token")
      if (token) {
        headers.set("authorization", `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "admin/users",
      }),
    }),
    createUser: builder.mutation({
      query: (payload) => ({
        url: "admin/users",
        method: "POST",
        body: payload,
      }),
    }),
    deleteUser: builder.mutation({
      query: (payload) => ({
        url: `admin/users/${payload}`,
        method: "DELETE",
        body: payload,
      }),
    }),
    updateUser: builder.mutation({
      query: (payload) => ({
        url: `admin/users/${payload._id}`,
        method: "PATCH",
        body: payload,
      }),
    }),
    getMovies: builder.query({
      query: () => ({
        url: "movies",
      }),
    }),
    createMovie: builder.mutation({
      query: (payload) => ({
        url: "movies",
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
    updateMovie: builder.mutation({
      query: (payload) => ({
        url: `movies/${payload._id}`,
        method: "PATCH",
        body: payload,
      }),
    }),
    getBooks: builder.query({
      query: () => ({
        url: "books",
      }),
    }),
    createBook: builder.mutation({
      query: (payload) => ({
        url: "books",
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
    updateBook: builder.mutation({
      query: (payload) => ({
        url: `books/${payload._id}`,
        method: "PATCH",
        body: payload,
      }),
    }),
    getVideogames: builder.query({
      query: () => ({
        url: "videogames",
      }),
    }),
    createVideogame: builder.mutation({
      query: (payload) => ({
        url: "videogames",
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
    updateVideogame: builder.mutation({
      query: (payload) => ({
        url: `videogames/${payload._id}`,
        method: "PATCH",
        body: payload,
      }),
    }),
    getMeditations: builder.query({
      query: () => ({
        url: "meditations",
      }),
    }),
    createMeditation: builder.mutation({
      query: (payload) => ({
        url: "meditations",
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
    updateMeditation: builder.mutation({
      query: (payload) => ({
        url: `meditations/${payload._id}`,
        method: "PATCH",
        body: payload,
      }),
    }),
    getBreaths: builder.query({
      query: () => ({
        url: "breaths",
      }),
    }),
    createBreath: builder.mutation({
      query: (payload) => ({
        url: "breaths",
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
    updateBreath: builder.mutation({
      query: (payload) => ({
        url: `breaths/${payload._id}`,
        method: "PATCH",
        body: payload,
      }),
    }),
    getAdvice: builder.query({
      query: () => ({
        url: "advice",
      }),
    }),
    getAdviceById: builder.query({
      query: (payload) => ({
        url: `advice/${payload}`,
      }),
    }),
    createAdvice: builder.mutation({
      query: (payload) => ({
        url: "advice",
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
        url: `advice/${payload._id}`,
        method: "PATCH",
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
    resetPassword: builder.mutation({
      query: (payload) => ({
        url: "reset_password",
        method: "POST",
        body: payload,
      }),
    }),
    validPasswordToken: builder.mutation({
      query: (payload) => ({
        url: "valid_password_token",
        method: "POST",
        body: payload,
      }),
    }),
    newPassword: builder.mutation({
      query: (payload) => ({
        url: "new_password",
        method: "POST",
        body: payload,
      }),
    }),
    sendEmail: builder.mutation({
      query: (payload) => ({
        url: "contact",
        method: "POST",
        body: payload,
      }),
    }),
    getJournals: builder.query({
      query: () => ({
        url: "journals",
      }),
    }),
    getJournalsByUserId: builder.query({
      query: (payload) => ({
        url: `journals/${payload}`,
      }),
    }),
    createJournal: builder.mutation({
      query: (payload) => ({
        url: "journals",
        method: "POST",
        body: payload,
      }),
    }),
    deleteJournal: builder.mutation({
      query: (payload) => ({
        url: `journals/${payload}`,
        method: "DELETE",
        body: payload,
      }),
    }),
    updateJournal: builder.mutation({
      query: (payload) => ({
        url: `journals/${payload._id}`,
        method: "PATCH",
        body: payload,
      }),
    }),
  }),
})

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetBooksQuery,
  useGetMoviesQuery,
  useGetVideogamesQuery,
  useGetAdviceQuery,
  useGetAdviceByIdQuery,
  useGetMeditationsQuery,
  useGetBreathsQuery,
  useSignInMutation,
  useSignUpMutation,
  useResetPasswordMutation,
  useValidPasswordTokenMutation,
  useNewPasswordMutation,
  useSendEmailMutation,
  useCreateMovieMutation,
  useCreateBookMutation,
  useCreateVideogameMutation,
  useCreateAdviceMutation,
  useCreateBreathMutation,
  useCreateMeditationMutation,
  useUpdateAdviceMutation,
  useUpdateBreathMutation,
  useUpdateMeditationMutation,
  useUpdateMovieMutation,
  useUpdateBookMutation,
  useUpdateVideogameMutation,
  useDeleteAdviceMutation,
  useDeleteBreathMutation,
  useDeleteMeditationMutation,
  useDeleteMovieMutation,
  useDeleteBookMutation,
  useDeleteVideogameMutation,
  useGetJournalsQuery,
  useGetJournalsByUserIdQuery,
  useCreateJournalMutation,
  useDeleteJournalMutation,
  useUpdateJournalMutation,
} = apiSlice
