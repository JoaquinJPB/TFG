import {
  useNewPasswordMutation,
  useResetPasswordMutation,
  useValidPasswordTokenMutation,
} from "../libraries/api/apiSlice"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const useResetPassword = () => {
  const [resetPasswordRequest] = useResetPasswordMutation()
  const [validPasswordTokenRequest] = useValidPasswordTokenMutation()
  const [newPasswordRequest] = useNewPasswordMutation()
  const navigate = useNavigate()

  const resetPassword = (email) => {
    resetPasswordRequest({ email })
      .unwrap()
      .then(() => {
        toast.success("Email enviado con éxito", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      })
      .catch(() => {
        toast.error("Email solicitado no existe.", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      })
  }

  const newPassword = (resetToken, newPassword) => {
    validPasswordTokenRequest({ resetToken })
      .unwrap()
      .then(() => {
        newPasswordRequest({ resetToken, newPassword })
          .unwrap()
          .then(() => {
            toast.success("Contraseña restablecida con éxito", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            })
            navigate("/")
          }).catch(() => {
            toast.error("Ha ocurrido un error al restablecer la contraseña.", {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            })
          })
      })
  }

  return { resetPassword, newPassword }
}
