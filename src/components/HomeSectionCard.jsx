import { useNavigate } from "react-router-dom"
import styles from "../styles/HomeSectionCard.module.css"

const HomeSectionCard = ({ title, img, route }) => {
	const navigate = useNavigate()
	return (
		<div className={styles.cardBody} onClick={() => navigate(route)}>
			<img src={img} alt={title} />
			<h3>{title}</h3>
		</div>
	)
}

export default HomeSectionCard
