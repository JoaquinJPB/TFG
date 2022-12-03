import journalBackground from "../images/undraw_diary_re_4jpc.svg"
import Header from "../components/Header"
import { useSelector } from "react-redux"
import { Button, Grid, Modal, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useNavigate } from "react-router-dom"
import JournalCard from "../components/JournalCard"
import {
  useCreateJournalMutation,
  useGetJournalsByUserIdQuery,
} from "../libraries/api/apiSlice"
import { CheckRequest } from "../components/CheckRequest"
import { toast } from "react-toastify"
import { useState } from "react"
import { useForm } from "react-hook-form"

import styleBoxModal from "../styles/BoxModal.module.css"

const Journal = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const userId = user.data.id

  // Modal
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [title, setTitle] = useState("")

  const {
    data: journals,
    isLoading,
    isError,
    refetch,
  } = useGetJournalsByUserIdQuery(user.data.id)

  const [createJournal] = useCreateJournalMutation()

  const handleCreateJournal = (payload, callback = () => null) => {
    createJournal(payload)
      .unwrap()
      .then(() => {
        toast.success("Diario creado", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
        callback()
      })
      .catch(() =>
        toast.error("Error al crear el diario", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      )
    refetch()
  }

  const { register, handleSubmit } = useForm()

  return (
    <Box
      component="article"
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      alignContent="center"
      sx={{ margin: "0 1rem" }}
    >
      {user.token === undefined ? (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignContent="center"
          sx={{ width: "50%" }}
        >
          <Header title={"Bienvenido a tu diario personal"} />
          <Typography variant="h5" component="h2" textAlign="center">
            Aquí podrás crear un registro personal de todo lo que te sucede cada
            día. ¡Anótalo todo! Las cosas buenas, las cosas malas, lo que te
            hace feliz o lo que te enoja. ¡Hazlo tu hábito diario y mira cómo
            cambia tu perspectiva!
          </Typography>
          <Typography variant="h5" component="h2" textAlign="center" mt={2}>
            Inicia sesión para acceder a este contenido
          </Typography>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            sx={{
              mt: 4,
              mb: 2,
              fontWeight: "bold",
              fontSize: "1.25rem",
            }}
            onClick={() => navigate("/login")}
          >
            Iniciar sesión
          </Button>
        </Box>
      ) : (
        <CheckRequest isLoading={isLoading} isError={isError} refetch={refetch}>
          <Grid container mt={2}>
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              alignItems="center"
            >
              <Header title={"Lista de diarios"} />
              <Grid
                container
                display="flex"
                justifyContent={"center"}
                gap={4}
                marginTop={2}
              >
                {journals !== undefined ? (
                  journals.data.map((journal) => (
                    <JournalCard key={journal._id} journal={journal} />
                  ))
                ) : (
                  <></>
                )}
              </Grid>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{
                  mt: 5,
                  mb: 2,
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                }}
                onClick={handleOpen}
              >
                Crear nuevo diario
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  className={styleBoxModal.boxModal}
                  component="form"
                  onClick={handleSubmit(() =>
                    handleCreateJournal({ owner: userId, title })
                  )}
                >
                  <TextField
                    {...register("username", {
                      required: true,
                    })}
                    required
                    name="username"
                    id="username"
                    label="Nombre de usuario"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => {
                      setTitle(e.target.value)
                    }}
                  />
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                      marginTop: "1rem"
                    }}
                  >
                    Crear diario
                  </Button>
                </Box>
              </Modal>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display={"flex"}
              justifyContent={"center"}
              alignItems="center"
            >
              <Box>
                <Box
                  component="img"
                  src={journalBackground}
                  alt="Fondo diario personal"
                  width="100%"
                />
              </Box>
            </Grid>
          </Grid>
        </CheckRequest>
      )}
    </Box>
  )
}

export default Journal
