
import styles from '../styles/Header.module.css'

const Header = ({title, subtitle}) => {
    return (
        <header>
                <div className={styles.header}>
                    <h1 className={styles.title}>{title}</h1>
                </div>
                <p className={styles.subtitle}>{subtitle}</p>
        </header>
    )
}

export default Header