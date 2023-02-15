import VideogamesBackground from "../images/undraw_video_game_night_8h8m.svg"
import ItemsGrid from "../components/ItemsGrid"
import { CheckRequest } from "../components/CheckRequest"
import { useGetVideogamesQuery } from "../libraries/api/apiSlice"

const Videogames = () => {
  const {
    data: videogames,
    isLoading,
    isError,
    refetch,
  } = useGetVideogamesQuery()
  return (
    <CheckRequest isLoading={isLoading} isError={isError} refetch={refetch}>
      <ItemsGrid
        title={"Recomendaciones de videojuegos"}
        items={videogames}
        background={VideogamesBackground}
      />
    </CheckRequest>
  )
}

export default Videogames
