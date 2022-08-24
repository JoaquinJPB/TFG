import ItemsGrid from "../components/ItemsGrid"
import BooksBackground from "../images/Books_Background.png"
import { useGetBooksQuery } from "../libraries/api/apiSlice"
import {CheckRequest} from "../components/CheckRequest"


const Books = () => {
  const { data: books, isLoading, isError, refetch } = useGetBooksQuery()
  return (
    <CheckRequest isLoading={isLoading || !books} isError={isError} refetch={refetch}>
      <ItemsGrid
        title={"Recomendaciones de libros"}
        subtitle={
          "Este tipo de lecturas, orientadas a mejorar nuestro conocimiento sobre determinados procesos y estados psicológicos, son siempre de gran ayuda. Amplían nuestras perspectivas, nos instruyen y además nos dotan de valiosas técnicas para mejorar nuestra forma de pensar."
        }
        items={books}
        background={BooksBackground}
      />
    </CheckRequest>
  )
}

export default Books
