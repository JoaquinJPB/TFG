import styles from "../styles/SectionCard.module.css"
import { useNavigate } from "react-router-dom"

const SectionCard = ({ title, img, route }) => {
  const navigate = useNavigate()
  return (
    <div
      className={styles.sectionsCardBody}
      onClick={() => navigate("/recommendations/" + route)}
    >
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </div>
  )
}

export default SectionCard
