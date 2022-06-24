import MovieCard from "./MovieCard";
import movies from "../movies.json"
import styles from '../styles/MoviesGrid.module.css'

export default function MoviesGrid() {
    return (
        <div>
            <ul className={styles.moviesGrid}>
            {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </ul>
        </div>
    )
}
