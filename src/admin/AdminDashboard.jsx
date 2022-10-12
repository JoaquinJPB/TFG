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
  useUpdateAdviceMutation,
  useDeleteAdviceMutation,
  useGetBreathsQuery,
  useGetBooksQuery,
  useGetMeditationsQuery,
  useGetMoviesQuery,
  useGetVideogamesQuery,
} from "../libraries/api/apiSlice"
import { CheckRequest } from "../components/CheckRequest"

import TableDashboard from "./TableDashboard"
import { toast } from "react-toastify"
import { useState } from "react"

import styles from "../styles/AdminDashboard.module.css"


const AdminDashboard = () => {
  const [addAdvice] = useAddAdviceMutation()

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

  const [options, setOptions] = useState("")

  const handleChangeOption = (event) => {
    setOptions(event.target.value)
  }

  const renderSwitchOption = (options) => {
    switch (options) {
      case "Usuarios":
        return <></>

      case "Consejos":
        return (
          <CheckRequest
            isLoading={isLoadingAdvice}
            isError={isErrorAdvice}
            refetch={refetchAdvice}
          >
            <TableDashboard
              request={advice}
              title={"Consejos"}
            ></TableDashboard>
          </CheckRequest>
        )

      case "Respiración":
        return (
          <CheckRequest
            isLoading={isLoadingBreaths}
            isError={isErrorBreaths}
            refetch={refetchBreaths}
          >
            <TableDashboard
              request={breaths}
              title={"Respiración"}
            ></TableDashboard>
          </CheckRequest>
        )

      case "Meditación":
        return (
          <CheckRequest
            isLoading={isLoadingMeditations}
            isError={isErrorMeditations}
            refetch={refetchMeditations}
          >
            <TableDashboard
              request={meditations}
              title={"Meditación"}
            ></TableDashboard>
          </CheckRequest>
        )

      case "Libros":
        return (
          <CheckRequest
            isLoading={isLoadingBooks}
            isError={isErrorBooks}
            refetch={refetchBooks}
          >
            <TableDashboard request={books} title={"Libros"}></TableDashboard>
          </CheckRequest>
        )

      case "Películas":
        return (
          <CheckRequest
            isLoading={isLoadingMovies}
            isError={isErrorMovies}
            refetch={refetchMovies}
          >
            <TableDashboard
              request={movies}
              title={"Películas"}
            ></TableDashboard>
          </CheckRequest>
        )

      case "Videojuegos":
        return (
          <CheckRequest
            isLoading={isLoadingVideogames}
            isError={isErrorVideogames}
            refetch={refetchVideogames}
          >
            <TableDashboard
              request={videogames}
              title={"Videojuegos"}
            ></TableDashboard>
          </CheckRequest>
        )

      default:
        ;<></>
    }
  }

  const buttonHandleSwitch = (options) => {
    switch (options) {
      case "Consejos":
        console.log(options)
        break

      default:
        ;<></>
    }
  }

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
              <MenuItem value={"Usuarios"}>Usuarios</MenuItem>
              <MenuItem value={"Consejos"}>Consejos</MenuItem>
              <MenuItem value={"Respiración"}>Respiración</MenuItem>
              <MenuItem value={"Meditación"}>Meditación</MenuItem>
              <MenuItem value={"Libros"}>Libros</MenuItem>
              <MenuItem value={"Películas"}>Películas</MenuItem>
              <MenuItem value={"Videojuegos"}>Videojuegos</MenuItem>
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
            <Box className={styles.boxModal}>
              <TextField
                required
                id="title"
                label="Título"
                variant="outlined"
                fullWidth
                sx={{marginBottom: "1.5rem"}}
              ></TextField>
              <TextField
                required
                id="description"
                label="Descripción"
                variant="outlined"
                fullWidth
                sx={{marginBottom: "1.5rem"}}
              ></TextField>
              <TextField
                required
                id="img"
                label="URL Img"
                variant="outlined"
                fullWidth
                sx={{marginBottom: "1.5rem"}}
              ></TextField>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ fontWeight: "bold" }}
                onClick={buttonHandleSwitch}
              >
                Crear {options}
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
          {renderSwitchOption(options)}
        </Grid>
      </Grid>
    </Container>
  )
}

export default AdminDashboard
