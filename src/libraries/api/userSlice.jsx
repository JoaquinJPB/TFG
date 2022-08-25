import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: undefined,
  },
  reducers: {
    token: (state, action) => {
      state.user = action.payload
    },
    clearStoreToken: (state) => {
      state.user = undefined
    },
  },
})

export const { token, clearStoreToken } = userSlice.actions

export const selectUser = (state) => state.user.user

export default userSlice.reducer
