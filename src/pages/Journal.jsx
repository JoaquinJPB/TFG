import journalBackground from "../images/undraw_diary_re_4jpc.svg"
import Header from "../components/Header"
import { useSelector } from "react-redux"
import { Button, Grid, Modal, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useNavigate } from "react-router-dom"
import JournalCard from "../components/JournalCard"
import {
  useCreateJournalMutation,
  useDeleteJournalMutation,
  useGetJournalsByUserIdQuery,
  useUpdateJournalMutation,
} from "../libraries/api/apiSlice"
import { CheckRequest } from "../components/CheckRequest"
import { toast } from "react-toastify"
import React, { useState } from "react"
import { useForm } from "react-hook-form"

import ModeEditIcon from "@mui/icons-material/ModeEdit"
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp"

import styleBoxModal from "../styles/BoxModal.module.css"

const Journal = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const userId = user.data.id
  const [selectJournal, setSelectJournal] = useState()

  // Modal
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setSelectJournal()
    setTitle()
  }

  const [openEdit, setOpenEdit] = useState(false)
  const handleOpenEdit = () => setOpenEdit(true)
  const handleCloseEdit = () => {
    setOpenEdit(false)
    setSelectJournal()
    setTitle()
  }

  const [title, setTitle] = useState("")

  const {
    data: journals,
    isLoading,
    isError,
    refetch,
  } = useGetJournalsByUserIdQuery(user.data.id)

  const [createJournal] = useCreateJournalMutation()
  const [updateJournal] = useUpdateJournalMutation()
  const [deleteJournal] = useDeleteJournalMutation()

  const getPromiseResource = (
    promise,
    payload,
    success,
    error,
    callback = () => null
  ) => {
    promise(payload)
      .unwrap()
      .then(() => {
        toast.success(`${success}`, {
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
        toast.error(`${error} `, {
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
  }

  const requestJournals = {
    create: (payload, callback = () => null) =>
      getPromiseResource(
        createJournal,
        payload,
        "Diario creado",
        "Error al crear el diario",
        () => {
          refetch()
          callback()
        }
      ),
    update: (payload, callback = () => null) =>
      getPromiseResource(
        updateJournal,
        payload,
        "Diario actualizado",
        "Error al actualizar el diario",
        () => {
          refetch()
          callback()
        }
      ),
    delete: (payload) =>
      getPromiseResource(
        deleteJournal,
        payload,
        "Diario eliminado",
        "Error al eliminar el diario",
        refetch
      ),
  }

  const handleJournals = (options, journalId = "") => {
    switch (options) {
      case "create":
        requestJournals.create({ owner: userId, title }, handleClose)
        break

      case "update":
        requestJournals.update({ _id: journalId, title }, handleCloseEdit)
        break

      case "delete":
        requestJournals.delete(journalId)
        break

      default:
        break
    }
  }

  const { register, handleSubmit } = useForm()
  const {
    register: registerEdit,
    handleSubmit: handleSubmitEdit,
    setValue,
  } = useForm()

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
              <Grid container display="flex" justifyContent="center" gap={2}>
                {journals !== undefined ? (
                  journals.data.map((journal) => (
                    <React.Fragment key={journal._id}>
                      <JournalCard journal={journal} />
                      <Box
                        component="div"
                        display="flex"
                        flexDirection={{ xs: "row", md: "column" }}
                        justifyContent="center"
                        alignItems="center"
                        mt={3}
                      >
                        <Button
                          variant="text"
                          onClick={() => {
                            setValue("titleEdit", title)
                            setSelectJournal(journal._id)
                            handleOpenEdit()
                          }}
                        >
                          <ModeEditIcon
                            sx={{ fontSize: "2rem", color: "#5c80c7" }}
                          ></ModeEditIcon>
                        </Button>
                        <Button
                          variant="text"
                          onClick={() => handleJournals("delete", journal._id)}
                        >
                          <DeleteSharpIcon
                            sx={{ fontSize: "2rem", color: "#f94144" }}
                          ></DeleteSharpIcon>
                        </Button>
                      </Box>
                    </React.Fragment>
                  ))
                ) : (
                  <></>
                )}
              </Grid>
              <Modal
                open={openEdit}
                onClose={handleCloseEdit}
                aria-labelledby="modal-journal-edit"
                aria-describedby="modal-journal-edit-title"
              >
                <Box
                  className={styleBoxModal.boxModal}
                  component="form"
                  onSubmit={handleSubmitEdit(() =>
                    handleJournals("update", selectJournal)
                  )}
                >
                  <TextField
                    {...registerEdit("titleEdit", {
                      required: true,
                    })}
                    required
                    name="titleEdit"
                    id="titleEdit"
                    label="Título"
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
                      marginTop: "1rem",
                    }}
                  >
                    Actualizar diario
                  </Button>
                </Box>
              </Modal>
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
                aria-labelledby="modal-journal-create"
                aria-describedby="modal-journal-create-title"
              >
                <Box
                  className={styleBoxModal.boxModal}
                  component="form"
                  onSubmit={handleSubmit(() => handleJournals("create"))}
                >
                  <TextField
                    {...register("title", {
                      required: true,
                    })}
                    required
                    name="title"
                    id="title"
                    label="Título"
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
                      marginTop: "1rem",
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
