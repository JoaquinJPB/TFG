import styles from "../styles/Card.module.css"
import { Box, Fade, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"

const JournalCard = ({ exercise }) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(true)
  }, [checked])

  return (
    <Fade in={checked}>
      <Grid item xs={12} sm={3} md={4}>
        <Box className={styles.card}>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="bold"
            className={styles.title}
          >
            {exercise.title}
          </Typography>
        </Box>
      </Grid>
    </Fade>
  )
}

export default JournalCard
