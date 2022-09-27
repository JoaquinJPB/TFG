import { useDispatch } from "react-redux"
import { clearStoreToken } from "../libraries/api/userSlice"

export const useLogout = () => {
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(clearStoreToken())
    sessionStorage.clear()
  }

  return { logout, useLogout }
}
