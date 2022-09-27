import { Grid } from "@mui/material"
import styles from "../styles/ItemsGrid.module.css"
import Header from "./Header"
import ItemCard from "./ItemCard"

const ItemsGrid = ({ title, subtitle, items, background }) => {
  return (
    <article >
      <Grid container px={5} spacing={6}>
        <Grid item xs={12} md={6}>
          <Grid container className={styles.gridItemsSection}>
            <Header title={title} subtitle={subtitle}/>
            <Grid container spacing={4}>
              {items.data.map((item) => (
                <ItemCard key={item._id} item={item} />
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}>
          <img
            src={background}
            alt="Background section"
            className={styles.imgBackground}
          />
        </Grid>
      </Grid>
    </article>
  )
}

export default ItemsGrid
