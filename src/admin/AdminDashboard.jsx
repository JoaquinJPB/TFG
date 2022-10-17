import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material"
import {
  useGetAdviceQuery,
  useAddAdviceMutation,
  useAddBreathMutation,
  useAddMeditationMutation,
  useAddMovieMutation,
  useAddBookMutation,
  useAddVideogameMutation,
  useGetBreathsQuery,
  useGetBooksQuery,
  useGetMeditationsQuery,
  useGetMoviesQuery,
  useGetVideogamesQuery,
  useDeleteAdviceMutation,
  useDeleteBreathMutation,
  useDeleteMeditationMutation,
  useDeleteMovieMutation,
  useDeleteBookMutation,
  useDeleteVideogameMutation,
} from "../libraries/api/apiSlice"
import { CheckRequest } from "../components/CheckRequest"

import TableDashboard from "./TableDashboard"
import { toast } from "react-toastify"
import { useState } from "react"
import { useForm } from "react-hook-form"

import styles from "../styles/AdminDashboard.module.css"

const AdminDashboard = () => {
  const [options, setOptions] = useState("")
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [addAdvice] = useAddAdviceMutation()
  const [addBreath] = useAddBreathMutation()
  const [addMeditation] = useAddMeditationMutation()
  const [addMovie] = useAddMovieMutation()
  const [addBook] = useAddBookMutation()
  const [addVideogame] = useAddVideogameMutation()

  const [deleteAdvice] = useDeleteAdviceMutation()
  const [deleteBreath] = useDeleteBreathMutation()
  const [deleteMeditation] = useDeleteMeditationMutation()
  const [deleteMovie] = useDeleteMovieMutation()
  const [deleteBook] = useDeleteBookMutation()
  const [deleteVideogame] = useDeleteVideogameMutation()

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [img, setImg] = useState()
  const [founder, setFounder] = useState()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const {
    data: advice,
    isLoadingAdvice,
    isErrorAdvice,
    refetchAdvice,
  } = useGetAdviceQuery()

  const {
    data: breaths,
    isLoadingBreaths,
    isErrorBreaths,
    refetchBreaths,
  } = useGetBreathsQuery()

  const {
    data: meditations,
    isLoadingMeditations,
    isErrorMeditations,
    refetchMeditations,
  } = useGetMeditationsQuery()

  const {
    data: books,
    isLoadingBooks,
    isErrorBooks,
    refetchBooks,
  } = useGetBooksQuery()

  const {
    data: movies,
    isLoadingMovies,
    isErrorMovies,
    refetchMovies,
  } = useGetMoviesQuery()

  const {
    data: videogames,
    isLoadingVideogames,
    isErrorVideogames,
    refetchVideogames,
  } = useGetVideogamesQuery()

  const handleAddAdvice = (payload) => {
    addAdvice(payload)
      .then(() =>
        toast.success("Consejo creado", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      )
      .catch(() =>
        toast.error("Error al crear el consejo", {
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

  const handleAddBreath = (payload) => {
    addBreath(payload)
      .then(() =>
        toast.success("Ejercicio de respiración creado", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      )
      .catch(() =>
        toast.error("Error al crear el ejercicio de respiración", {
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

  const handleAddMeditation = (payload) => {
    addMeditation(payload)
      .then(() =>
        toast.success("Ejercicio de meditación creado", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      )
      .catch(() =>
        toast.error("Error al crear el ejercicio de meditación", {
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

  const handleAddMovie = (payload) => {
    addMovie(payload)
      .then(() =>
        toast.success("Película creada", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      )
      .catch(() =>
        toast.error("Error al crear la película", {
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

  const handleAddBook = (payload) => {
    addBook(payload)
      .then(() =>
        toast.success("Libro creado", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      )
      .catch(() =>
        toast.error("Error al crear el libro", {
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

  const handleAddVideogame = (payload) => {
    addVideogame(payload)
      .then(() =>
        toast.success("Videojuego creado", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      )
      .catch(() =>
        toast.error("Error al crear el videojuego", {
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

  const handleDeleteAdvice = (payload) => {
    deleteAdvice(payload)
      .then(() =>
        toast.success("Consejo eliminado con éxito", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      )
      .catch(() =>
        toast.error("Error al eliminar el consejo", {
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

  const handleDeleteBreath = (payload) => {
    deleteBreath(payload)
      .then(() =>
        toast.success("Ejercicio de respiración eliminado con éxito", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      )
      .catch(() =>
        toast.error("Error al eliminar el ejercicio de respiración", {
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

  const handleDeleteMeditation = (payload) => {
    deleteMeditation(payload)
      .then(() =>
        toast.success("Ejercicio de meditación eliminado con éxito", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      )
      .catch(() =>
        toast.error("Error al eliminar el ejercicio de meditación", {
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

  const handleDeleteMovie = (payload) => {
    deleteMovie(payload)
      .then(() =>
        toast.success("Película eliminada con éxito", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      )
      .catch(() =>
        toast.error("Error al eliminar la película", {
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

  const handleDeleteBook = (payload) => {
    deleteBook(payload)
      .then(() =>
        toast.success("Libro eliminado con éxito", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      )
      .catch(() =>
        toast.error("Error al eliminar el libro", {
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

  const handleDeleteVideogame = (payload) => {
    deleteVideogame(payload)
      .then(() =>
        toast.success("Videojuego eliminado con éxito", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      )
      .catch(() =>
        toast.error("Error al eliminar el videojuego", {
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

  const handleChangeOption = (event) => {
    setOptions(event.target.value)
  }

  const getOptionData = (options) => {
    const optionsData = {
      Users: <></>,
      Advice: (
        <CheckRequest
          isLoading={isLoadingAdvice}
          isError={isErrorAdvice}
          refetch={refetchAdvice}
        >
          <TableDashboard
            request={advice}
            deleteItem={handleDeleteAdvice}
          ></TableDashboard>
        </CheckRequest>
      ),
      Breath: (
        <CheckRequest
          isLoading={isLoadingBreaths}
          isError={isErrorBreaths}
          refetch={refetchBreaths}
        >
          <TableDashboard
            request={breaths}
            deleteItem={handleDeleteBreath}
          ></TableDashboard>
        </CheckRequest>
      ),
      Meditation: (
        <CheckRequest
          isLoading={isLoadingMeditations}
          isError={isErrorMeditations}
          refetch={refetchMeditations}
        >
          <TableDashboard
            request={meditations}
            deleteItem={handleDeleteMeditation}
          ></TableDashboard>
        </CheckRequest>
      ),
      Books: (
        <CheckRequest
          isLoading={isLoadingBooks}
          isError={isErrorBooks}
          refetch={refetchBooks}
        >
          <TableDashboard
            request={books}
            deleteItem={handleDeleteBook}
          ></TableDashboard>
        </CheckRequest>
      ),
      Movies: (
        <CheckRequest
          isLoading={isLoadingMovies}
          isError={isErrorMovies}
          refetch={refetchMovies}
        >
          <TableDashboard
            request={movies}
            deleteItem={handleDeleteMovie}
          ></TableDashboard>
        </CheckRequest>
      ),
      Videogames: (
        <CheckRequest
          isLoading={isLoadingVideogames}
          isError={isErrorVideogames}
          refetch={refetchVideogames}
        >
          <TableDashboard
            request={videogames}
            deleteItem={handleDeleteVideogame}
          ></TableDashboard>
        </CheckRequest>
      ),
    }
    return optionsData[options] ?? <></>
  }

  const buttonHandleAdd = (options) => {
    switch (options) {
      case "Advice":
        handleAddAdvice({ title, description, img })
        break

      case "Breath":
        handleAddBreath({ title, description, img })
        break

      case "Meditation":
        handleAddMeditation({ title, description, img })
        break

      case "Books":
        handleAddBook({ title, description, founder, img })
        break

      case "Movies":
        handleAddMovie({ title, description, founder, img })
        break

      case "Videogames":
        handleAddVideogame({ title, description, founder, img })
        break

      default:
        break
    }

    handleClose(false)
  }

  return (
    <Container>
      <Grid
        container
        sx={{
          marginTop: { xs: "3rem", sm: "0" },
          gap: { xs: "2rem", sm: "0" },
        }}
      >
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth>
            <InputLabel id="optionsLabel">Opciones</InputLabel>
            <Select
              labelId="optionsLabel"
              id="optionsSelect"
              value={options}
              label="Opciones"
              onChange={handleChangeOption}
            >
              <MenuItem value={"Users"}>Usuarios</MenuItem>
              <MenuItem value={"Advice"}>Consejos</MenuItem>
              <MenuItem value={"Breath"}>Respiración</MenuItem>
              <MenuItem value={"Meditation"}>Meditación</MenuItem>
              <MenuItem value={"Books"}>Libros</MenuItem>
              <MenuItem value={"Movies"}>Películas</MenuItem>
              <MenuItem value={"Videogames"}>Videojuegos</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h4"
            component="h1"
            fontWeight="bold"
            align="center"
          >
            Panel de administración
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ fontWeight: "bold" }}
            onClick={handleOpen}
          >
            Crear {options}
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              component="form"
              className={styles.boxModal}
              onSubmit={handleSubmit(() => buttonHandleAdd(options))}
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
                sx={{ marginBottom: "1.5rem" }}
              />
              {errors.title && (
                <Typography
                  fullWidth
                  sx={{
                    color: "red",
                  }}
                >
                  Escriba un título válido.
                </Typography>
              )}
              <TextField
                {...register("description", {
                  required: true,
                })}
                required
                name="description"
                id="description"
                label="Descripción"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
                sx={{ marginBottom: "1.5rem" }}
              />
              {errors.description && (
                <Typography
                  fullWidth
                  sx={{
                    color: "red",
                  }}
                >
                  Escriba una descripción válida.
                </Typography>
              )}
              {options === "Books" ||
              options === "Movies" ||
              options === "Videogames" ? (
                <TextField
                  {...register("founder", {
                    required: true,
                  })}
                  required
                  name="founder"
                  id="founder"
                  label="Autor/Director/Desarrolladora"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => {
                    setFounder(e.target.value)
                  }}
                  sx={{ marginBottom: "1.5rem" }}
                />
              ) : (
                <></>
              )}
              <TextField
                required
                id="img"
                name="img"
                label="URL Img"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setImg(e.target.value)
                }}
                sx={{ marginBottom: "1.5rem" }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ fontWeight: "bold" }}
              >
                Crear
              </Button>
            </Box>
          </Modal>
        </Grid>
      </Grid>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Grid item xs={12} mt={3}>
          {getOptionData(options)}
        </Grid>
      </Grid>
    </Container>
  )
}

export default AdminDashboard
