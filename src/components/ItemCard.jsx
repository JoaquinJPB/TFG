import style from "../styles/ItemCard.module.css";

const ItemCard = ({ item }) => {
  return (
    <li className={style.itemCard}>
      <div>
        <img src={item.img} alt={item.title} className={style.itemImage} />
      </div>
      <div className={style.itemCardInfo}>
        <p className={style.textTitle}>{item.title}</p>
        <p className={style.textSubtitle}>{item.author || item.director || item.developer}</p>
        <button className={style.cardButton}>Read More</button>
      </div>
    </li>
  );
};

export default ItemCard;