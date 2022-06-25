
import { Link } from "react-router-dom"
import styles from "../styles/SectionCard.module.css"

const SectionCard = ({title, img, route}) => {
    return (
        <Link to={'/recommendations/'+ route}>
            <div className={styles.sectionsCardBody}>
                <img src={img} alt={title} />
                <h3>{title}</h3>
            </div>
        </Link>
    )
}

export default SectionCard