import SectionComponent from "../components/SectionComponent";

import imgMeditationBackground from "../images/Meditation_Background.png";
import exercises from "../exercises.json";

const Meditation = () => {
  return (
    <SectionComponent
      title={"Meditación"}
      subtitle={"Prueba de meditación"}
      img={imgMeditationBackground}
      exercises={exercises}
    />
  );
};

export default Meditation;
