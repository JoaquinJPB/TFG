import styles from "../styles/ItemsGrid.module.css";
import Header from "./Header";
import ItemCard from "./ItemCard";

const ItemsGrid = ({ title, subtitle, items, background }) => {
  return (
    <article className={styles.gridArticle}>
      <section>
        <div>
          <Header title={title} subtitle={subtitle} />
          <ul className={styles.itemsGrid}>
            {items.data.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </section>
      <section>
          <img
            src={background}
            alt="Background section"
            className={styles.imgBackground}
          />
      </section>
    </article>
  );
};

export default ItemsGrid;
