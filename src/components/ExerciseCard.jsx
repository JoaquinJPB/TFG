import style from "../styles/ExerciseCard.module.css";

const ExerciseCard = ({ exercise }) => {
  return (
    <li className={style.exerciseBodyCard}>
      <div>
        <img src={exercise.img} alt={exercise.title} />
      </div>
      <div>
        <h4>{exercise.title}</h4>
        <p>{exercise.description}</p>
      </div>
    </li>
  );
};

export default ExerciseCard;
