import VideogamesBackground from "../images/Videogames_Background.png"
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
