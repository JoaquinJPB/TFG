import imgAdviceBackground from "../images/Advice_Background.png";
import exercises from "../exercises.json";
import SectionLayout from "../components/SectionLayout";

const Advice = () => {
  return (
    <SectionLayout
      title={"Consejos sobre la ansiedad social"}
      subtitle={"Prueba de ansiedad social"}
      img={imgAdviceBackground}
      exercises={exercises}
    />
  );
};

export default Advice;
