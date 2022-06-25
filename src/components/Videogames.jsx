
import videogames from "../videogames.json"
import VideogamesBackground from "../images/Videogames_Background.png"
import ItemsGrid from "./ItemsGrid"

export const Videogames = () => {
    return (
        <ItemsGrid title={"Recomendaciones de videojuegos"} subtitle={"Prueba de videojuegos"} items={videogames} background={VideogamesBackground}/> 
    )
}
