import styles from "../styles/Card.module.css"
import { Box, Fade, Grid, Modal, Typography } from "@mui/material"
import { useEffect, useState } from "react"

const ExerciseCard = ({ exercise }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(true)
  }, [checked])

  return (
    <Fade in={checked}>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <Box className={styles.card} onClick={handleOpen}>
          <Typography variant="h5" component="h2" className={styles.title}>
            {exercise.title}
          </Typography>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={styles.boxModal}>
            <Box
              component="img"
              src={exercise.img}
              alt={exercise.title}
              className={styles.imgModal}
            />
            <Typography variant="h5" component="h2" className={styles.title}>
              {exercise.title}
            </Typography>
            <Typography
              variant="p"
              component="p"
              className={styles.description}
            >
              {exercise.description}
            </Typography>
          </Box>
        </Modal>
      </Grid>
    </Fade>
  )
}

export default ExerciseCard
