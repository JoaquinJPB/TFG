import journalBackground from "../images/undraw_diary_re_4jpc.svg"
import Header from "../components/Header"
import { useSelector } from "react-redux"
import { Button, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useNavigate } from "react-router-dom"
import JournalCard from "../components/JournalCard"
import { useGetJournalsByUserIdQuery } from "../libraries/api/apiSlice"
import { CheckRequest } from "../components/CheckRequest"

const Journal = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)

  const {
    data: journals,
    isLoading,
    isError,
    refetch,
  } = useGetJournalsByUserIdQuery(user.data.id)

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
              >
                Crear nuevo diario
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display={"flex"}
              justifyContent={"center"}
              alignItems="center"
            >
              <Box >
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
