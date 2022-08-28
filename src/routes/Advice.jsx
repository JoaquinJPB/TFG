import imgAdviceBackground from "../images/undraw_positive_attitude_re_wu7d.svg";
import exercises from "../exercises.json";
import SectionLayout from "../components/SectionLayout";

const Advice = () => {
  return (
    <SectionLayout
      title={"Consejos sobre la ansiedad social"}
      img={imgAdviceBackground}
      exercises={exercises}
    />
  );
};

export default Advice;
