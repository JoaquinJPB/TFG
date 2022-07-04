import styles from "../styles/ItemsGrid.module.css";
import Header from "./Header";
import ItemCard from "./ItemCard";

const ItemsGrid = ({ title, subtitle, items, background }) => {
  return (
    <main>
      <section className={styles.moviesSection}>
        <div>
          <Header title={title} subtitle={subtitle} />
          <ul className={styles.moviesGrid}>
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
    </main>
  );
};

export default ItemsGrid;
