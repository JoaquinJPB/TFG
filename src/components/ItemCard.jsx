import styles from '../styles/ItemCard.module.css'

const ItemCard = ({ item }) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w300' + item.poster_path
    return (
        <li className={styles.movieCard}>
            <div>
                <img src={imgUrl} alt={item.title} className={styles.movieImage} />
            </div>
            <div>
                <h3>{item.title}</h3>
                <p>{item.overview}</p>
            </div>
        </li>
    )
}

export default ItemCard