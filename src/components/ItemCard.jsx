import styles from "../styles/ItemCard.module.css";

const ItemCard = ({ item }) => {
  return (
    <li className={styles.itemCard}>
      <div>
        <img src={item.img} alt={item.title} className={styles.itemImage} />
      </div>
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </li>
  );
};

export default ItemCard;
