import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { clearStoreToken } from "../libraries/api/userSlice"

export const useLogout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = () => {
    dispatch(clearStoreToken())
    sessionStorage.clear()
    navigate("/")
  }

  return { logout, useLogout }
}
