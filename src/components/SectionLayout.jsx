import Header from "./Header"
import ExerciseGrid from "./ExerciseGrid"

import styles from "../styles/SectionLayout.module.css"
import { Fade, Grid } from "@mui/material"
import { useEffect, useState } from "react"

const SectionLayout = ({ title, subtitle, img, exercises }) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(true)
  }, [checked])

  return (
    <Fade in={checked}>
      <article className={styles.articleLayoutBody}>
        <Grid container spacing={2} px={5} mt={1}>
          <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
            <section>
              <Header title={title} subtitle={subtitle} />
              <img src={img} alt={title} />
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
            <Grid
              container
              spacing={5}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <ExerciseGrid exercises={exercises.data} />
            </Grid>
          </Grid>
        </Grid>
      </article>
    </Fade>
  )
}

export default SectionLayout
