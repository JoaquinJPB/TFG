import styles from "../styles/ItemsGrid.module.css";
import Header from "./Header";
import ItemCard from "./ItemCard";

const ItemsGrid = ({ title, subtitle, items, background }) => {
  return (
    <article>
      <section className={styles.gridSection}>
        <div>
          <Header title={title} subtitle={subtitle} />
          <ul className={styles.itemsGrid}>
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </ul>
        </div>
        <div>
          <img
            src={background}
            alt="Background section"
            className={styles.imgBackground}
          />
        </div>
      </section>
    </article>
  );
};

export default ItemsGrid;
