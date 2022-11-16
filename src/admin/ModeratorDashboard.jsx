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
  useGetBreathsQuery,
  useGetBooksQuery,
  useGetMeditationsQuery,
  useGetMoviesQuery,
  useGetVideogamesQuery,
  useCreateAdviceMutation,
  useCreateBreathMutation,
  useCreateMeditationMutation,
  useCreateMovieMutation,
  useCreateBookMutation,
  useCreateVideogameMutation,
  useDeleteAdviceMutation,
  useDeleteBreathMutation,
  useDeleteMeditationMutation,
  useDeleteMovieMutation,
  useDeleteBookMutation,
  useDeleteVideogameMutation,
  useUpdateAdviceMutation,
  useUpdateMeditationMutation,
  useUpdateBreathMutation,
  useUpdateMovieMutation,
  useUpdateBookMutation,
  useUpdateVideogameMutation,
} from "../libraries/api/apiSlice"
import { CheckRequest } from "../components/CheckRequest"

import TableDashboard from "./TableDashboard"
import { toast } from "react-toastify"
import { useState } from "react"
import { useForm } from "react-hook-form"

import styles from "../styles/BoxModal.module.css"

const AdminDashboard = () => {
  const [options, setOptions] = useState("Advice")

  // Advice, Breaths, Meditation, \\ Books, Movies, Videogames
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [img, setImg] = useState()
  const [founder, setFounder] = useState()

  // Modal
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  // Create Methods
  const [createAdvice] = useCreateAdviceMutation()
  const [createBreath] = useCreateBreathMutation()
  const [createMeditation] = useCreateMeditationMutation()
  const [createMovie] = useCreateMovieMutation()
  const [createBook] = useCreateBookMutation()
  const [createVideogame] = useCreateVideogameMutation()

  // Update Methods
  const [updateAdvice] = useUpdateAdviceMutation()
  const [updateBreath] = useUpdateBreathMutation()
  const [updateMeditation] = useUpdateMeditationMutation()
  const [updateMovie] = useUpdateMovieMutation()
  const [updateBook] = useUpdateBookMutation()
  const [updateVideogame] = useUpdateVideogameMutation()

  // Delete Methods
  const [deleteAdvice] = useDeleteAdviceMutation()
  const [deleteBreath] = useDeleteBreathMutation()
  const [deleteMeditation] = useDeleteMeditationMutation()
  const [deleteMovie] = useDeleteMovieMutation()
  const [deleteBook] = useDeleteBookMutation()
  const [deleteVideogame] = useDeleteVideogameMutation()

  const { register, handleSubmit, setValue } = useForm()

  const {
    data: advice,
    isLoading: isLoadingAdvice,
    isError: isErrorAdvice,
    refetch: refetchAdvice,
  } = useGetAdviceQuery()

  const {
    data: breaths,
    isLoading: isLoadingBreaths,
    isError: isErrorBreaths,
    refetch: refetchBreaths,
  } = useGetBreathsQuery()

  const {
    data: meditations,
    isLoading: isLoadingMeditations,
    isError: isErrorMeditations,
    refetch: refetchMeditations,
  } = useGetMeditationsQuery()

  const {
    data: books,
    isLoading: isLoadingBooks,
    isError: isErrorBooks,
    refetch: refetchBooks,
  } = useGetBooksQuery()

  const {
    data: movies,
    isLoading: isLoadingMovies,
    isError: isErrorMovies,
    refetch: refetchMovies,
  } = useGetMoviesQuery()

  const {
    data: videogames,
    isLoading: isLoadingVideogames,
    isError: isErrorVideogames,
    refetch: refetchVideogames,
  } = useGetVideogamesQuery()

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

  const allRequests = {
    Advice: {
      create: (payload) =>
        getPromiseResource(
          createAdvice,
          payload,
          "Consejo creado",
          "Error al crear el consejo",
          refetchAdvice
        ),
      update: (payload) =>
        getPromiseResource(
          updateAdvice,
          payload,
          "Consejo actualizado",
          "Error al actualizar el consejo",
          refetchAdvice
        ),
      delete: (payload) =>
        getPromiseResource(
          deleteAdvice,
          payload,
          "Consejo eliminado",
          "Error al eliminar el consejo",
          refetchAdvice
        ),
    },
    Breaths: {
      create: (payload) =>
        getPromiseResource(
          createBreath,
          payload,
          "Técnica de respiración creada",
          "Error al crear la técnica de respiración",
          refetchBreaths
        ),
      update: (payload) =>
        getPromiseResource(
          updateBreath,
          payload,
          "Técnica de respiración actualizada",
          "Error al actualizar la técnica de respiración",
          refetchBreaths
        ),
      delete: (payload) =>
        getPromiseResource(
          deleteBreath,
          payload,
          "Técnica de respiración eliminada",
          "Error al eliminar la técnica de respiración",
          refetchBreaths
        ),
    },
    Meditations: {
      create: (payload) =>
        getPromiseResource(
          createMeditation,
          payload,
          "Técnica de meditación creada",
          "Error al crear la técnica de meditación",
          refetchMeditations
        ),
      update: (payload) =>
        getPromiseResource(
          updateMeditation,
          payload,
          "Técnica de meditación actualizada",
          "Error al actualizar la técnica de meditación",
          refetchMeditations
        ),
      delete: (payload) =>
        getPromiseResource(
          deleteMeditation,
          payload,
          "Técnica de meditación eliminada",
          "Error al eliminar la técnica de meditación",
          refetchMeditations
        ),
    },
    Movies: {
      create: (payload) =>
        getPromiseResource(
          createMovie,
          payload,
          "Película creada",
          "Error al crear la película",
          refetchMovies
        ),
      update: (payload) =>
        getPromiseResource(
          updateMovie,
          payload,
          "Película actualizada",
          "Error al actualizar la película",
          refetchMovies
        ),
      delete: (payload) =>
        getPromiseResource(
          deleteMovie,
          payload,
          "Película eliminada",
          "Error al eliminar la película",
          refetchMovies
        ),
    },
    Books: {
      create: (payload) =>
        getPromiseResource(
          createBook,
          payload,
          "Libro creado",
          "Error al crear el libro",
          refetchBooks
        ),
      update: (payload) =>
        getPromiseResource(
          updateBook,
          payload,
          "Libro actualizado",
          "Error al actualizar el libro",
          refetchBooks
        ),
      delete: (payload) =>
        getPromiseResource(
          deleteBook,
          payload,
          "Libro eliminado",
          "Error al eliminar el libro",
          refetchBooks
        ),
    },
    Videogames: {
      create: (payload) =>
        getPromiseResource(
          createVideogame,
          payload,
          "Videojuego creada",
          "Error al crear el videojuego",
          refetchVideogames
        ),
      update: (payload) =>
        getPromiseResource(
          updateVideogame,
          payload,
          "Videojuego actualizada",
          "Error al actualizar el videojuego",
          refetchVideogames
        ),
      delete: (payload) =>
        getPromiseResource(
          deleteVideogame,
          payload,
          "Videojuego eliminada",
          "Error al eliminar el videojuego",
          refetchVideogames
        ),
    },
  }

  const handleChangeOption = (event) => {
    setOptions(event.target.value)
  }

  const getOptionData = (options) => {
    const optionsData = {
      Advice: (
        <CheckRequest
          isLoading={isLoadingAdvice}
          isError={isErrorAdvice}
          refetch={refetchAdvice}
        >
          <TableDashboard
            request={advice}
            updateItem={allRequests.Advice.update}
            deleteItem={allRequests.Advice.delete}
            options={options}
          ></TableDashboard>
        </CheckRequest>
      ),
      Breaths: (
        <CheckRequest
          isLoading={isLoadingBreaths}
          isError={isErrorBreaths}
          refetch={refetchBreaths}
        >
          <TableDashboard
            request={breaths}
            updateItem={allRequests.Breaths.update}
            deleteItem={allRequests.Breaths.delete}
            options={options}
          ></TableDashboard>
        </CheckRequest>
      ),
      Meditations: (
        <CheckRequest
          isLoading={isLoadingMeditations}
          isError={isErrorMeditations}
          refetch={refetchMeditations}
        >
          <TableDashboard
            request={meditations}
            updateItem={allRequests.Meditations.update}
            deleteItem={allRequests.Meditations.delete}
            options={options}
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
            updateItem={allRequests.Movies.update}
            deleteItem={allRequests.Movies.delete}
            options={options}
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
            updateItem={allRequests.Books.update}
            deleteItem={allRequests.Books.delete}
            options={options}
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
            updateItem={allRequests.Videogames.update}
            deleteItem={allRequests.Videogames.delete}
            options={options}
          ></TableDashboard>
        </CheckRequest>
      ),
    }
    return optionsData[options] ?? <></>
  }

  const buttonHandleCreate = (options) => {
    switch (options) {
      case "Advice":
        allRequests.Advice.create({ title, description, img })
        break

      case "Breaths":
        allRequests.Breaths.create({ title, description, img })
        break

      case "Meditations":
        allRequests.Meditations.create({ title, description, img })
        break

      case "Movies":
        allRequests.Movies.create({
          title,
          description,
          director: founder,
          img,
        })
        break

      case "Books":
        allRequests.Books.create({ title, description, author: founder, img })
        break

      case "Videogames":
        allRequests.Videogames.create({
          title,
          description,
          developer: founder,
          img,
        })
        break

      default:
        break
    }
    handleClose(false)
    clearState()
  }

  const clearState = () => {
    setValue("title", undefined)
    setValue("description", undefined)
    setValue("img", undefined)
    setValue("founder", undefined)
  }

  return (
    <Container>
      <Grid
        container
        sx={{
          marginTop: "3rem",
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
              <MenuItem value={"Advice"}>Consejos</MenuItem>
              <MenuItem value={"Breaths"}>Respiración</MenuItem>
              <MenuItem value={"Meditations"}>Meditación</MenuItem>
              <MenuItem value={"Movies"}>Películas</MenuItem>
              <MenuItem value={"Books"}>Libros</MenuItem>
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
            Crear
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modalResources"
            aria-describedby="modalResourcesDescription"
          >
            <Box
              component="form"
              className={styles.boxModal}
              onSubmit={handleSubmit(() => buttonHandleCreate(options))}
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
