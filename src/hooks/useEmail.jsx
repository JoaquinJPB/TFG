import { toast } from "react-toastify"
import { useSendEmailMutation } from "../libraries/api/apiSlice"

export const useEmail = () => {
  const [sendEmailRequest] = useSendEmailMutation()

  const sendEmail = (name, number, email, message) => {
    sendEmailRequest({ name, number, email, message })
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
        toast.error("Ha ocurrido un fallo al enviar el email", {
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

  return { sendEmail }
}
