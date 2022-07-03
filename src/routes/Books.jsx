import ItemsGrid from '../components/ItemsGrid'
import books from "../books.json"
import BooksBackground from "../images/Books_Background.png"

const Books = () => {
    return (
        <ItemsGrid title={"Recomendaciones de libros"} subtitle={"Prueba libros"} items={books} background={BooksBackground}/>
    )
}

export default Books