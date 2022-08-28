import { Grid } from "@mui/material";
import style from "../styles/ItemCard.module.css";

const ItemCard = ({ item }) => {
  return (
    <Grid item xs={12} md={3} className={style.itemCard}>
      <div>
        <img src={item.img} alt={item.title} className={style.itemImage} />
      </div>
      <div className={style.itemCardInfo}>
        <p className={style.textTitle}>{item.title}</p>
        <p className={style.textSubtitle}>{item.author || item.director || item.developer}</p>
        <button className={style.cardButton}>Read More</button>
      </div>
    </Grid>
  );
};

export default ItemCard;