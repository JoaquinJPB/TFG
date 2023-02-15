import { Box, Grid, Typography } from "@mui/material"
import imgHomeAbout from "../images/undraw_engineering_team_a7n2.svg"

const HomeAbout = () => {
  return (
    <Grid container spacing={5} px={5} mt={5}>
      <Grid
        item
        xs={12}
        md={6}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box component="section">
          <Typography
            component="h2"
            variant="h2"
            fontSize="2rem"
            fontWeight="600"
            textAlign="center"
            sx={{
              color: "var(--secondaryColor)",
            }}
          >
            Conoce nuestra historia
          </Typography>
          <Typography
            component="p"
            variant="p"
            mt={2}
            fontSize="1.5rem"
            textAlign="center"
          >
            Somos una organización dedicada a estudiar herramientas y ayudas
            para poder facilitar el entendimiento de la ansiedad social, así
            como dar la posibilidad de experimentar nuevos campos que permitan
            comprender todos los mecanismos que existen para afrontar este
            transtorno.
          </Typography>
          <Typography
            component="p"
            variant="p"
            mt={2}
            fontSize="1.5rem"
            textAlign="center"
          >
            Contamos con gente especializada que cada día estudia nuevas maneras
            de confrontar dicha inquietud, con el fin de poder garantizar la
            mayor calidad de nuestros recursos disponibles, dentro de nuestra
            web.
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          component="img"
          src={imgHomeAbout}
          alt="Acerca de nosotros"
          width="100%"
        />
      </Grid>
    </Grid>
  )
}

export default HomeAbout
