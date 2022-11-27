import styles from "../styles/Card.module.css"
import { Box, Fade, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const JournalCard = ({ journal }) => {
  const [checked, setChecked] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setChecked(true)
  }, [checked])

  return (
    <Fade in={checked}>
      <Grid item xs={12} sm={3} md={4}>
        <Box className={styles.card} onClick={() => navigate(journal._id)}>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="bold"
            className={styles.title}
          >
            {journal.title}
          </Typography>
        </Box>
      </Grid>
    </Fade>
  )
}

export default JournalCard
