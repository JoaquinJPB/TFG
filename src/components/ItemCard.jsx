import styles from "../styles/ItemCard.module.css";

const ItemCard = ({ item }) => {
  return (
    <li className={styles.movieCard}>
      <div>
        <img src={item.img} alt={item.title} className={styles.movieImage} />
      </div>
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </li>
  );
};

export default ItemCard;
