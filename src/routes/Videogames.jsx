import videogames from "../videogames.json";
import VideogamesBackground from "../images/Videogames_Background.png";
import ItemsGrid from "../components/ItemsGrid";

const Videogames = () => {
  return (
    <ItemsGrid
      title={"Recomendaciones de videojuegos"}
      subtitle={"Los estudios muestran que los videojuegos pueden ayudar a los jugadores a disminuir significativamente los efectos de este trastorno a través del entrenamiento de habilidades sociales. Estos son algunos de los videojuegos que se destacan en el tratamiento de la fobia social."}
      items={videogames}
      background={VideogamesBackground}
    />
  );
};

export default Videogames;
