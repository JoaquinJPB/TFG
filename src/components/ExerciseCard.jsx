import styles from "../styles/ExerciseCard.module.css"
import { Box, Grid, Modal, Zoom } from "@mui/material"
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
    <Zoom in={checked}>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <div className={styles.card} onClick={handleOpen}>
          <h2 className={styles.title}>{exercise.title}</h2>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={styles.boxModal}>
            <img
              src={exercise.img}
              alt={exercise.title}
              className={styles.imgModal}
            />
            <h2 className={styles.title}>{exercise.title}</h2>
            <p className={styles.description}>{exercise.description}</p>
          </Box>
        </Modal>
      </Grid>
    </Zoom>
  )
}

export default ExerciseCard
