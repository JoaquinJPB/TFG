import styles from "../styles/Home.module.css"
import HomeSectionCard from "../components/HomeSectionCard"

import imgBreathing from "../images/breathing_section.png"
import imgMeditation from "../images/meditation_section.png"
import imgRecommendations from "../images/recommendations_section.png"
import imgAdvice from "../images/advice_section.png"
import imgHome from "../images/undraw_welcome_re_h3d9.svg"
import { Grid } from "@mui/material"

const Home = () => {
  return (
    <article className={styles.articleHome}>
      <section className={styles.headerHome}>
        <h1>Bloodborne PC Remastered</h1>
        <h3>
          The official, opinionated, batteries-included toolset for efficient
          Redux development
        </h3>
      </section>
      <Grid container spacing={2} px={5}>
        <Grid
          item
          xs={12}
          md={7}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <figure>
            <img src={imgHome} alt="Welcome" className={styles.imgHome} />
          </figure>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid container spacing={2}>
            <Grid
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <h1>Bloodborne PC Remastered</h1>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              display={"flex"}
              justifyContent={"center"}
            >
              <HomeSectionCard
                title={"Respiración"}
                img={imgBreathing}
                route={"breathing"}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              display={"flex"}
              justifyContent={"center"}
            >
              <HomeSectionCard
                title={"Meditación"}
                img={imgMeditation}
                route={"meditation"}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              display={"flex"}
              justifyContent={"center"}
            >
              <HomeSectionCard
                title={"Recomendaciones"}
                img={imgRecommendations}
                route={"recommendations"}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              display={"flex"}
              justifyContent={"center"}
            >
              <HomeSectionCard
                title={"Consejos"}
                img={imgAdvice}
                route={"advice"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </article>
  )
}

export default Home
