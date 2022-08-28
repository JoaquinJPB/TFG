import SectionLayout from "../components/SectionLayout";

import imgBreathingBackground from "../images/undraw_yoga_re_i5ld.svg";
import exercises from "../exercises.json";

const Breathing = () => {
  return (
    <SectionLayout
      title={"Respiración"}
      img={imgBreathingBackground}
      exercises={exercises}
    />
  );
};

export default Breathing;
