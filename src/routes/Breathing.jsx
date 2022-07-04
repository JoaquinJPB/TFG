import SectionComponent from "../components/SectionComponent";

import imgBreathingBackground from "../images/Breathing_Background.png";
import exercises from "../exercises.json";

const Breathing = () => {
  return (
    <SectionComponent
      title={"Técnicas de respiración"}
      subtitle={"Prueba de respiración"}
      img={imgBreathingBackground}
      exercises={exercises}
    />
  );
};

export default Breathing;
