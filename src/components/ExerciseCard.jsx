import styles from "../styles/ExerciseCard.module.css"
import { Grid } from "@mui/material"

const ExerciseCard = ({ exercise }) => {
  return (
    <Grid item xs={12} sm={6}>
      <div className={styles.exerciseBodyCard}>
        <img src={exercise.img} alt={exercise.title} />
        <h2>{exercise.title}</h2>
      </div>
    </Grid>
  )
}

export default ExerciseCard
