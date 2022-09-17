import styles from "../styles/ExerciseCard.module.css"
import { Grid } from "@mui/material"

const ExerciseCard = ({ exercise }) => {
  return (
    <Grid item xs={12} sm={3}>
      <div className={styles.card}>
        <h2 className={styles.title}>{exercise.title}</h2>
      </div>
    </Grid>
  )
}

export default ExerciseCard
