import React from 'react'
import MoviesGrid from './components/MoviesGrid';
import styles from './styles/App.module.css'

function App() {
    return (
        <div>
            <header>
                <h1 className={styles.title}>Movies</h1>
            </header>
            <main>
                <MoviesGrid />
            </main>
        </div>
    )
}

export default App;