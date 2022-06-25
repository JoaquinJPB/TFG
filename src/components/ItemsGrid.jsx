import styles from '../styles/ItemsGrid.module.css'
import ItemCard from "./ItemCard";

const ItemsGrid = ({title, subtitle, items, background}) => {
    return (
        <div>
            <div className={styles.moviesSection}>
                <div>
                    <header>
                        <div className={styles.div1}>
                            <h1 className={styles.title}>{title}</h1>
                        </div>
                        <p className={styles.subtitle}>{subtitle}</p>
                    </header>
                    <ul className={styles.moviesGrid}>
                    {items.map((item) => <ItemCard key={item.id} item={item} />)}
                    </ul>
                </div>    
                <div>
                    <img src={background} alt="Background section" className={styles.imgBackground} />
                </div>
            </div>
        </div>
    )
}

export default ItemsGrid