
import { useSignUpMutation } from "../libraries/api/apiSlice"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const useRegister = () => {
  const [signUp] = useSignUpMutation()
  const navigate = useNavigate()

  const signUpUser = (username, email, password) => {
    signUp({ username, email, password}).unwrap().then(() => {
      console.log("Usuario registrado")
      navigate("/login")
    }).catch(() => 
    toast.error(
      "Error al registraste. Usuario/correo electrónico ya en uso.",
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
    )
  }

  return { signUpUser }
}
