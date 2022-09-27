import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: undefined,
    data: {
      id: undefined,
      username: undefined,
      email: undefined,
      roles: []
    }
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      const user = parseJWT(action.payload)
      state.data = {
        id: user.id,
        username: user.username,
        email: user.email,
        roles: user.roles
      }
    },
    clearStoreToken: (state) => {
      state.user = undefined
      state.token = undefined
      state.data = undefined
    },
  },
})

export const { setToken, clearStoreToken } = userSlice.actions
export default userSlice.reducer

const parseJWT = (token) => {
  var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}
