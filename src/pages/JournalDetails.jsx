import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"

import { useParams } from "react-router-dom"
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import {
  useCreateNoteMutation,
  useGetNotesByJournalIdQuery,
} from "../libraries/api/apiSlice"

import MyNote from "../components/MyNote"
import { CheckRequest } from "../components/CheckRequest"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import MyCalendar from "../components/MyCalendar"
import { useState } from "react"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"
import { useForm } from "react-hook-form"

const JournalDetails = () => {
  const { journalId } = useParams()
  const user = useSelector((state) => state.user)
  const userId = user.data.id

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [mood, setMood] = useState("")
  const [date, setDate] = useState(new Date())

  const {
    data: notes,
    isLoading,
    isError,
    refetch,
  } = useGetNotesByJournalIdQuery(journalId)

  const [createNote] = useCreateNoteMutation()

  const handleCreateNote = (payload, callback = () => null) => {
    createNote(payload)
      .unwrap()
      .then(() => {
        toast.success("Nota creada", {
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
        toast.error("Error al crear la nota", {
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
    <CheckRequest isLoading={isLoading} isError={isError} refetch={refetch}>
      <Box
        component="article"
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        alignContent="center"
        sx={{ margin: "0 1rem" }}
      >
        <Grid container>
          <Grid item xs={12} md={4}>
            <MyCalendar date={date} onChange={setDate}></MyCalendar>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              component="form"
              mt={1}
              display="flex"
              flexDirection="column"
              gap={3}
              onSubmit={handleSubmit(() =>
                handleCreateNote(
                  {
                    owner: userId,
                    journal: journalId,
                    title,
                    description,
                    mood,
                    date,
                  },
                  refetch
                )
              )}
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
          <Grid item xs={12} md={4}>
            <Swiper
              // install Swiper modules
              slidesPerView={"auto"}
              modules={[Pagination]}
              spaceBetween={30}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              {notes !== undefined ? (
                notes.data.map((note) => (
                  <SwiperSlide key={note._id}>
                    <MyNote note={note} />
                  </SwiperSlide>
                ))
              ) : (
                <></>
              )}
            </Swiper>
          </Grid>
        </Grid>
      </Box>
    </CheckRequest>
  )
}

export default JournalDetails
