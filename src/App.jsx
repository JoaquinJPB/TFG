import React from 'react'
import ItemsGrid from './components/ItemsGrid';
import items from "./movies.json"
//import styles from './styles/App.module.css'

import { BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/movies' element={<ItemsGrid title={"Recomendaciones de peliculas"} subtitle={"Prueba peliculas"} items={items} />} />
                <Route path='/books' element={<ItemsGrid title={"Recomendaciones de libros"} subtitle={"Prueba libros"} items={items} />} />
                <Route path='/videogames' element={<ItemsGrid title={"Recomendaciones de videojuegos"} subtitle={"Prueba de videojuegos"} items={items}/>} />
            </Routes>
        </div>
    )
}

export default App;