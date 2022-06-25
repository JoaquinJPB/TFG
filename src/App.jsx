import React from 'react'
import ItemsGrid from './components/ItemsGrid';
import movies from "./movies.json"
import books from "./books.json"
import videogames from "./videogames.json"

import MoviesBackground from "./images/Movies_Background.png"
import BooksBackground from "./images/Books_Background.png"
import VideogamesBackground from "./images/Videogames_Background.png"
//import styles from './styles/App.module.css'

import { BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/movies' element={<ItemsGrid title={"Recomendaciones de películas"} subtitle={"Prueba de películas"} items={movies} background={MoviesBackground} />} />
                <Route path='/books' element={<ItemsGrid title={"Recomendaciones de libros"} subtitle={"Prueba libros"} items={books} background={BooksBackground}/>}  />
                <Route path='/videogames' element={<ItemsGrid title={"Recomendaciones de videojuegos"} subtitle={"Prueba de videojuegos"} items={videogames} background={VideogamesBackground}/>} />
            </Routes>
        </div>
    )
}

export default App;