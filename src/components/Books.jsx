import ItemsGrid from '../components/ItemsGrid'
import books from "../books.json"
import BooksBackground from "../images/Books_Background.png"

export const Books = () => {
    return (
        <ItemsGrid title={"Recomendaciones de libros"} subtitle={"Prueba libros"} items={books} background={BooksBackground}/>
    )
}
