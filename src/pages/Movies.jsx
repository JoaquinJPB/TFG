import ItemsGrid from "../components/ItemsGrid"
import MoviesBackground from "../images/undraw_horror_movie_3988.svg"
import { useGetMoviesQuery } from "../libraries/api/apiSlice"
import { CheckRequest } from "../components/CheckRequest"

const Movies = () => {
  const { data: movies, isLoading, isError, refetch } = useGetMoviesQuery()
  return (
    <CheckRequest isLoading={isLoading} isError={isError} refetch={refetch}>
      <ItemsGrid
        title={"Recomendaciones de películas"}
        items={movies}
        background={MoviesBackground}
      />
    </CheckRequest>
  )
}

export default Movies
