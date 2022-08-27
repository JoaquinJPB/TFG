import ItemsGrid from "../components/ItemsGrid"
import BooksBackground from "../images/Books_Background.png"
import { useGetBooksQuery } from "../libraries/api/apiSlice"
import { CheckRequest } from "../components/CheckRequest"

const Books = () => {
  const { data: books, isLoading, isError, refetch } = useGetBooksQuery()
  return (
    <CheckRequest isLoading={isLoading} isError={isError} refetch={refetch}>
      <ItemsGrid
        title={"Recomendaciones de libros"}
        items={books}
        background={BooksBackground}
      />
    </CheckRequest>
  )
}

export default Books
