import { useSignInMutation } from "../libraries/api/apiSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setToken } from "../libraries/api/userSlice"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"

export const useLogin = () => {
  const [signIn] = useSignInMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userState = useSelector((state) => state.user)

  const login = (email, password) => {
    signIn({ email, password })
      .unwrap()
      .then((res) => {
        dispatch(setToken(res.jwt))
        sessionStorage.setItem("token", res.jwt)
        navigate("/")
      })
      .catch(() => {
        toast.error(
          "Email/contraseña no son correctos.",
          {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        )
      })
  }

  const getUserLogged = () => {
    const getLocalStorage = localStorage.getItem("token")
    if (
      userState.token !== undefined &&
      getLocalStorage !== null &&
      getLocalStorage !== undefined
    ) {
      dispatch(setToken(getLocalStorage))
    }
    return userState
  }

  return { login, getUserLogged }
}
