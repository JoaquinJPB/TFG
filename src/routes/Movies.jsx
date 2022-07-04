import ItemsGrid from "../components/ItemsGrid";
import MoviesBackground from "../images/Movies_Background.png";
import movies from "../movies.json";

export const Movies = () => {
  return (
    <ItemsGrid
      title={"Recomendaciones de películas"}
      subtitle={"Prueba de películas"}
      items={movies}
      background={MoviesBackground}
    />
  );
};

export default Movies;
