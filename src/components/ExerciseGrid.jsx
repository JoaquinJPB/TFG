import ExerciseCard from "./ExerciseCard";

import styles from "../styles/ExerciseGrid.module.css";

const ExerciseGrid = ({ exercises }) => {
  return (
    <ul className={styles.exercisesLayout}>
      {exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </ul>
  );
};

export default ExerciseGrid;
