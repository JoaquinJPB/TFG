import SectionLayout from "../components/SectionLayout";

import imgMeditationBackground from "../images/Meditation_Background.png";
import exercises from "../exercises.json";

const Meditation = () => {
  return (
    <SectionLayout
      title={"Meditación"}
      subtitle={"La meditación puede darte una sensación de calma, paz y equilibrio que puede beneficiar tanto tu bienestar emocional como tu salud general. También puedes usarla para relajarte y lidiar con el estrés al enfocar tu atención en algo que te calme."}
      img={imgMeditationBackground}
      exercises={exercises}
    />
  );
};

export default Meditation;
