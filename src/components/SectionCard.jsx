import styles from "../styles/SectionCard.module.css"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Zoom } from "@mui/material"

const SectionCard = ({ title, img, route }) => {
  const navigate = useNavigate()

  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(true)
  }, [checked])

  return (
    <Zoom in={checked}>
      <div
        className={styles.sectionsCardBody}
        onClick={() => navigate("/recommendations/" + route)}
      >
        <img src={img} alt={title} />
        <h2>{title}</h2>
      </div>
    </Zoom>
  )
}

export default SectionCard
