import ExerciseCard from "./ExerciseCard"

const ExerciseGrid = ({ exercises }) => {
  return (
    <>
      {exercises.map((exercise) => (
        <ExerciseCard key={exercise._id} exercise={exercise} />
      ))}
    </>
  )
}

export default ExerciseGrid
