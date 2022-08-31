import { Grid } from "@mui/material"
import styles from "../styles/ItemCard.module.css"

const ItemCard = ({ item }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <div className={styles.itemCard}>
        <div>
          <img src={item.img} alt={item.title} className={styles.itemImage} />
        </div>
        <div className={styles.itemCardInfo}>
          <p className={styles.textTitle}>{item.title}</p>
          <p className={styles.textSubtitle}>
            {item.author || item.director || item.developer}
          </p>
          <button className={styles.cardButton}>Read More</button>
        </div>
      </div>
    </Grid>
  )
}

export default ItemCard
