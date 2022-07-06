import imgAdviceBackground from "../images/Advice_Background.png";
import exercises from "../exercises.json";
import SectionLayout from "../components/SectionLayout";

const Advice = () => {
  return (
    <SectionLayout
      title={"Consejos sobre la ansiedad social"}
      subtitle={"Aunque por lo general el trastorno de ansiedad social requiere ayuda de un médico especialista o de un psicoterapeuta calificado, puedes probar algunas de estas técnicas para controlar las situaciones que probablemente desencadenan los síntomas."}
      img={imgAdviceBackground}
      exercises={exercises}
    />
  );
};

export default Advice;
