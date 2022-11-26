import exampleJournals from "./exampleJournals.json"

import journalBackground from "../images/undraw_diary_re_4jpc.svg"
import Header from "../components/Header"
import { useSelector } from "react-redux"
import { Button, Container, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useNavigate } from "react-router-dom"
import JournalCard from "../components/JournalCard"

const Journal = () => {
  const navigate = useNavigate()
  const journals = exampleJournals

  const user = useSelector((state) => state.user)

  return (
    <Container spacing={2} px={5} mt={1}>
      {user.token === undefined ? (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignContent="center"
        >
          <Header title={"Bienvenido a tu diario personal"} />
          <Typography variant="h5" component="h2" textAlign={"center"}>
            Aquí podrás crear un registro personal de todo lo que te sucede cada
            día. ¡Anótalo todo! Las cosas buenas, las cosas malas, lo que te
            hace feliz o lo que te enoja. ¡Hazlo tu hábito diario y mira cómo
            cambia tu perspectiva!
          </Typography>
          <Typography variant="h5" component="h2" textAlign={"center"} mt={2}>
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
        <Box>
          <Grid container display="flex" justifyContent="space-around">
            <Grid
              item
              xs={12}
              md={6}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Header title={"Lista de diarios"} />
              <>
                {journals.map((journal) => (
                  <JournalCard key={journal._id} exercise={journal} />
                ))}
              </>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display={"flex"}
              justifyContent={"center"}
            >
              <Box component="img" src={journalBackground} alt="Fondo diario personal" width="100%" />
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  )
}

export default Journal
