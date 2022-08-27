import styles from "../styles/Home.module.css"
import HomeSectionCard from "../components/HomeSectionCard"

import imgBreathing from "../images/breathing_section.png"
import imgMeditation from "../images/meditation_section.png"
import imgRecommendations from "../images/recommendations_section.png"
import imgAdvice from "../images/advice_section.png"
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
        <button>
          <span className={styles.button_top}>Button</span>
        </button>
      </section>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}  display={"flex"} justifyContent={"center"}>
          <HomeSectionCard
            title={"Técnicas de respiración"}
            img={imgBreathing}
            route={"breathing"}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} display={"flex"} justifyContent={"center"}>
          <HomeSectionCard
            title={"Meditación"}
            img={imgMeditation}
            route={"meditation"}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} display={"flex"} justifyContent={"center"}>
          <HomeSectionCard
            title={"Recomendaciones"}
            img={imgRecommendations}
            route={"recommendations"}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} display={"flex"} justifyContent={"center"}>
          <HomeSectionCard
            title={"Consejos"}
            img={imgAdvice}
            route={"advice"}
          />
        </Grid>
      </Grid>
    </article>
  )
}

export default Home
