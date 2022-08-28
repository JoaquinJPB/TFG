import SectionCard from "../components/SectionCard"

import recomentationBackground from "../images/undraw_happy_feeling_re_e76r.svg"
import booksImg from "../images/undraw_reading_time_re_phf7.svg"
import moviesImg from "../images/undraw_horror_movie_3988.svg"
import VideogamesImg from "../images/undraw_video_game_night_8h8m.svg"

import styles from "../styles/Recommendations.module.css"
import Header from "../components/Header"
import { Grid } from "@mui/material"

const Recomendations = () => {
  return (
    <article className={styles.recommendationBody}>
      <Grid container px={5} display={"flex"} justifyContent={"center"}>
        <Grid item xs={12} lg={6} display={"flex"} justifyContent={"center"}>
          <img src={recomentationBackground} alt="Recomendaciones" className={styles.recommendationImgBackground} />
        </Grid>
        <Grid item xs={12} lg={6} display={"flex"} justifyContent={"center"}>
          <Grid container>
            <Grid item xs={12}>
              <Header title={"Recomendaciones"} />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} px={5}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <SectionCard
                    title={"Lectura"}
                    img={booksImg}
                    route={"books"}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <SectionCard
                    title={"Películas"}
                    img={moviesImg}
                    route={"movies"}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <SectionCard
                    title={"Videojuegos"}
                    img={VideogamesImg}
                    route={"videogames"}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </article>
  )
}

export default Recomendations
