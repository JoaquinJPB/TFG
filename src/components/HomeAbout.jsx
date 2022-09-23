import { Grid } from "@mui/material"
import styles from "../styles/Home.module.css"
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
        <section>
          <h2 className={styles.aboutTitle}>Conoce nuestra historia</h2>
          <p className={styles.aboutDescription}>
            Somos una organización dedicada a estudiar herramientas y ayudas
            para poder facilitar el entendimiento de la ansiedad social, así
            como dar la posibilidad de experimentar nuevos campos que permitan
            comprender todos los mecanismos que existen para afrontar este
            transtorno.
          </p>
          <p className={styles.aboutDescription}>
            Contamos con gente especializada que cada día estudia nuevas maneras
            de confrontar dicha inquietud, con el fin de poder garantizar la
            mayor calidad de nuestros recursos disponibles, dentro de nuestra
            web.
          </p>
        </section>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <figure>
          <img src={imgHomeAbout} alt="About us" className={styles.imgHome} />
        </figure>
      </Grid>
    </Grid>
  )
}

export default HomeAbout
