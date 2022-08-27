import { useSignInMutation } from "../libraries/api/apiSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setToken } from "../libraries/api/userSlice"

export const useLogin = () => {
  const [signIn] = useSignInMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = (email, password) => {
    signIn({ email, password })
      .unwrap()
      .then((res) => {
        dispatch(setToken(res))
        navigate("/")
      })
      .catch((error) => console.log(error))
  }

  return { login }
}
