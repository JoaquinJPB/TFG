import SectionLayout from "../components/SectionLayout";

import imgBreathingBackground from "../images/Breathing_Background.png";
import exercises from "../exercises.json";

const Breathing = () => {
  return (
    <SectionLayout
      title={"Técnicas de respiración"}
      subtitle={"Combatir la ansiedad es posible con técnicas de relajación y respiración ya que éstas ayudan a controlar el estrés y a ser más conscientes de los pensamientos catastróficos o miedos injustificados (principales detonantes de la ansiedad)."}
      img={imgBreathingBackground}
      exercises={exercises}
    />
  );
};

export default Breathing;
