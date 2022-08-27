
import { useSignUpMutation } from "../libraries/api/apiSlice"
import { useNavigate } from "react-router-dom"

export const useRegister = () => {
  const [signUp] = useSignUpMutation()
  const navigate = useNavigate()

  const register = (username, email, password, roles) => {
    signUp({ username, email, password, roles }).unwrap().then(() => {
      console.log("Usuario registrado")
      navigate("/login")
    }).catch((error) => console.log(error))
  }

  return { register }
}
