import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material"

import { useParams } from "react-router-dom"
import ModeEditIcon from "@mui/icons-material/ModeEdit"
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp"

import {
  useCreateNoteMutation,
  useDeleteNoteMutation,
  useGetNotesByJournalIdQuery,
  useUpdateNoteMutation,
} from "../libraries/api/apiSlice"

import MyNote from "../components/MyNote"
import { CheckRequest } from "../components/CheckRequest"

import MyCalendar from "../components/MyCalendar"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import { useCallback } from "react"

import styleBoxModal from "../styles/BoxModal.module.css"
import BarChart from "../components/BartChart"
import DonutChart from "../components/DonutChart"

const JournalDetails = () => {
  const [createNote] = useCreateNoteMutation()
  const [deleteNote] = useDeleteNoteMutation()
  const [updateNote] = useUpdateNoteMutation()

  const { journalId } = useParams()
  const user = useSelector((state) => state.user)
  const userId = user.data.id

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [mood, setMood] = useState("")
  const [date, setDate] = useState(new Date(Date.now()))
  const [currentNotes, setCurrenNotes] = useState([])

  // Modal
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setTitle()
    setDescription()
    setMood()
  }

  const {
    data: notes,
    isLoading,
    isError,
    refetch,
  } = useGetNotesByJournalIdQuery(journalId)

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

  const requestNotes = {
    create: (payload) =>
      getPromiseResource(
        createNote,
        payload,
        "Nota creada",
        "Error al crear la nota",
        refetch
      ),
    update: (payload) =>
      getPromiseResource(
        updateNote,
        payload,
        "Nota actualizada",
        "Error al actualizar la nota",
        refetch
      ),
    delete: (payload) =>
      getPromiseResource(
        deleteNote,
        payload,
        "Nota eliminada",
        "Error al eliminar la nota",
        refetch
      ),
  }

  const handleNote = (options) => {
    switch (options) {
      case "create":
        requestNotes.create({
          owner: userId,
          journal: journalId,
          title,
          description,
          mood,
          date,
        })
        break

      case "update":
        requestNotes.update({
          _id: currentNotes[0]._id,
          owner: userId,
          journal: journalId,
          title,
          description,
          mood,
        })
        break

      case "delete":
        requestNotes.delete(currentNotes[0]._id)
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

  const checkCurrentDate = useCallback(() => {
    if (notes !== undefined) {
      setCurrenNotes(
        notes.data.filter(
          (note) =>
            new Date(Date.parse(note.date)).toLocaleDateString("es-ES") ===
            date.toLocaleDateString("es-ES")
        )
      )
    }
  }, [date, notes])

  const moodOptions = notes && notes.data.map((note) => note.mood)
  const stats =
    moodOptions &&
    moodOptions.reduce((contador, palabra) => {
      contador[palabra] = (contador[palabra] || 0) + 1
      return contador
    }, {})

  const keys = stats ? Object.keys(stats) : []
  const values = stats ? Object.values(stats) : []
  const days = values ? values.reduce((a, b) => a + b, 0) : []
  const percentages = values ? values.map((x) => (x / days) * 100) : []

  useEffect(() => {
    checkCurrentDate()
  }, [checkCurrentDate])

  const fillDataNote = (noteTitle, noteDescription, noteMood) => {
    setValue("titleEdit", noteTitle)
    setValue("descriptionEdit", noteDescription)
    setValue("moodEdit", noteMood)
    handleOpen()
  }

  return (
    <CheckRequest isLoading={isLoading} isError={isError} refetch={refetch}>
      <Box component="article" sx={{ margin: "0 1rem" }}>
        <Grid
          container
          gap={{ xs: 5, md: 0 }}
          display="flex"
          justifyContent={{ xs: "center", md: "space-around" }}
          mt={4}
        >
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            justifyContent="center"
            mt={{ xs: 5, md: 1 }}
          >
            <MyCalendar date={date} onChange={setDate}></MyCalendar>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              component="form"
              mt={1}
              display="flex"
              flexDirection="column"
              gap={4}
              onSubmit={handleSubmit(() => handleNote("create"))}
            >
              <TextField
                {...register("title", {
                  required: true,
                })}
                autoComplete="title"
                required
                fullWidth
                name="title"
                id="title"
                label="Titulo"
                autoFocus
                variant="outlined"
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                {...register("description", {
                  required: true,
                })}
                label="Descripción"
                multiline
                rows={4}
                placeholder="Introduce tu mensaje"
                variant="outlined"
                name="description"
                id="description"
                fullWidth
                required
                onChange={(e) => setDescription(e.target.value)}
              />
              <FormControl>
                <InputLabel id="demo-select-small">Mood</InputLabel>
                <Select
                  {...register("mood", {
                    required: true,
                  })}
                  labelId="demo-select-small"
                  id="mood"
                  value={mood}
                  label="Mood"
                  onChange={(e) => setMood(e.target.value)}
                >
                  <MenuItem value={"Calmado"}>Calmado</MenuItem>
                  <MenuItem value={"Feliz"}>Feliz</MenuItem>
                  <MenuItem value={"Enérgico"}>Enérgico</MenuItem>
                  <MenuItem value={"Normal"}>Normal</MenuItem>
                  <MenuItem value={"Ansioso"}>Ansioso</MenuItem>
                  <MenuItem value={"Inquieto"}>Inquieto</MenuItem>
                  <MenuItem value={"Irritado"}>Irritado</MenuItem>
                  <MenuItem value={"Deprimido"}>Deprimido</MenuItem>
                  <MenuItem value={"Triste"}>Triste</MenuItem>
                </Select>
              </FormControl>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                Crear nota
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            {currentNotes.length !== 0 ? (
              currentNotes.map((note) => <MyNote key={note._id} note={note} />)
            ) : (
              <></>
            )}
            {currentNotes.length !== 0 ? (
              <Box
                component="div"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                mt={3}
              >
                <Button
                  variant="text"
                  onClick={() =>
                    fillDataNote(
                      currentNotes[0].title,
                      currentNotes[0].description,
                      currentNotes[0].mood
                    )
                  }
                >
                  <ModeEditIcon
                    sx={{ fontSize: "2rem", color: "#5c80c7" }}
                  ></ModeEditIcon>
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
                    onSubmit={handleSubmitEdit(() => handleNote("update"))}
                    display="flex"
                    gap={2}
                  >
                    <TextField
                      {...registerEdit("titleEdit", {
                        required: true,
                      })}
                      autoComplete="title"
                      required
                      fullWidth
                      name="titleEdit"
                      id="titleEdit"
                      label="Titulo"
                      variant="outlined"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                      {...registerEdit("descriptionEdit", {
                        required: true,
                      })}
                      label="Descripción"
                      multiline
                      rows={4}
                      placeholder="Introduce tu mensaje"
                      variant="outlined"
                      name="descriptionEdit"
                      id="descriptionEdit"
                      fullWidth
                      required
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <FormControl fullWidth>
                      <InputLabel id="demo-select-small-edit">Mood</InputLabel>
                      <Select
                        {...registerEdit("moodEdit", {
                          required: true,
                        })}
                        labelId="demo-select-small-edit"
                        id="moodEdit"
                        name="moodEdit"
                        label="moodEdit"
                        fullWidth
                        onChange={(e) => setMood(e.target.value)}
                      >
                        <MenuItem value={"Calmado"}>Calmado</MenuItem>
                        <MenuItem value={"Feliz"}>Feliz</MenuItem>
                        <MenuItem value={"Enérgico"}>Enérgico</MenuItem>
                        <MenuItem value={"Normal"}>Normal</MenuItem>
                        <MenuItem value={"Ansioso"}>Ansioso</MenuItem>
                        <MenuItem value={"Inquieto"}>Inquieto</MenuItem>
                        <MenuItem value={"Irritado"}>Irritado</MenuItem>
                        <MenuItem value={"Deprimido"}>Deprimido</MenuItem>
                        <MenuItem value={"Triste"}>Triste</MenuItem>
                      </Select>
                    </FormControl>
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      fullWidth
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      Actualizar nota
                    </Button>
                  </Box>
                </Modal>
                <Button variant="text" onClick={() => handleNote("delete")}>
                  <DeleteSharpIcon
                    sx={{ fontSize: "2rem", color: "#f94144" }}
                  ></DeleteSharpIcon>
                </Button>
              </Box>
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
        {notes !== undefined ? (
          <Grid
            container
            display="flex"
            justifyContent="space-evenly"
            mt={4}
            gap={5}
          >
            <Grid item xs={12} md={7} display="flex" justifyContent="center">
              <BarChart scores={values} labels={keys}></BarChart>
            </Grid>
            <Grid item xs={12} md={3} display="flex" justifyContent="center">
              <DonutChart scores={percentages} labels={keys}></DonutChart>
            </Grid>
          </Grid>
        ) : (
          <></>
        )}
      </Box>
    </CheckRequest>
  )
}

export default JournalDetails
