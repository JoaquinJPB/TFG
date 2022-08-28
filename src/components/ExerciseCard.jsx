import style from "../styles/ExerciseCard.module.css"
import { Grid } from "@mui/material"

const ExerciseCard = ({ exercise }) => {
  return (
    <Grid item xs={12} sm={12} md={4} xl={3}>
      <div className={style.exerciseBodyCard}>
        <img src={exercise.img} alt={exercise.title} />
        <h3>{exercise.title}</h3>
      </div>
    </Grid>
  )
}

export default ExerciseCard
