import ItemsGrid from "../components/ItemsGrid"
import MoviesBackground from "../images/Movies_Background.png"
import { useGetMoviesQuery } from "../libraries/api/apiSlice"
import { CheckRequest } from "../components/CheckRequest"

const Movies = () => {
  const { data: movies, isLoading, isError, refetch } = useGetMoviesQuery()
  return (
    <CheckRequest isLoading={isLoading} isError={isError} refetch={refetch}>
      <ItemsGrid
        title={"Recomendaciones de películas"}
        subtitle={
          "El cine ha sido siempre una gran herramienta para exponer todo tipo de vivencias, emociones y situaciones y, como no podía ser de otra manera, también se ha adentrado en representar las vidas de quienes padecen fobia social."
        }
        items={movies}
        background={MoviesBackground}
      />
    </CheckRequest>
  )
}

export default Movies
