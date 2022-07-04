import SectionLayout from "../components/SectionLayout";

import imgBreathingBackground from "../images/Breathing_Background.png";
import exercises from "../exercises.json";

const Breathing = () => {
  return (
    <SectionLayout
      title={"Técnicas de respiración"}
      subtitle={"Prueba de respiración"}
      img={imgBreathingBackground}
      exercises={exercises}
    />
  );
};

export default Breathing;
