
import { useSignUpMutation } from "../libraries/api/apiSlice"
import { useNavigate } from "react-router-dom"

export const useRegister = () => {
  const [signUp] = useSignUpMutation()
  const navigate = useNavigate()

  const register = (username, email, password) => {
    signUp({ username, email, password}).unwrap().then(() => {
      console.log("Usuario registrado")
      navigate("/login")
    }).catch((error) => console.log(error))
  }

  return { register }
}
