import React from 'react'
import ItemsGrid from './components/ItemsGrid';
import items from "./movies.json"
//import styles from './styles/App.module.css'

const App = () => {
    return (
        <div>
            <main>
                <ItemsGrid title={"Prueba"} subtitle={"qweqweqwewqe"} items={items}/>
            </main>
        </div>
    )
}

export default App;