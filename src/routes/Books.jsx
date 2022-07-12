import ItemsGrid from "../components/ItemsGrid";
import books from "../books.json";
import BooksBackground from "../images/Books_Background.png";

const Books = () => {
  return (
    <ItemsGrid
      title={"Recomendaciones de libros"}
      subtitle={"Este tipo de lecturas, orientadas a mejorar nuestro conocimiento sobre determinados procesos y estados psicológicos, son siempre de gran ayuda. Amplían nuestras perspectivas, nos instruyen y además nos dotan de valiosas técnicas para mejorar nuestra forma de pensar."}
      items={books}
      background={BooksBackground}
    />
  );
};

export default Books;
