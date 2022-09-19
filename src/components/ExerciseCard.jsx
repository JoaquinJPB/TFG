import styles from "../styles/ExerciseCard.module.css"
import { Box, Grid, Modal } from "@mui/material"
import { useState } from "react"

const ExerciseCard = ({ exercise }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Grid item xs={12} sm={3}>
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
  )
}

export default ExerciseCard
