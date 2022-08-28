import SectionLayout from "../components/SectionLayout";

import imgMeditationBackground from "../images/undraw_mindfulness_re_mmj6.svg";
import exercises from "../exercises.json";

const Meditation = () => {
  return (
    <SectionLayout
      title={"Meditación"}
      img={imgMeditationBackground}
      exercises={exercises}
    />
  );
};

export default Meditation;
