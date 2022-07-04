import SectionLayout from "../components/SectionLayout";

import imgMeditationBackground from "../images/Meditation_Background.png";
import exercises from "../exercises.json";

const Meditation = () => {
  return (
    <SectionLayout
      title={"Meditación"}
      subtitle={"Prueba de meditación"}
      img={imgMeditationBackground}
      exercises={exercises}
    />
  );
};

export default Meditation;
