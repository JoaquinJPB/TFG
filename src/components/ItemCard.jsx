import { Grid, Box, Modal } from "@mui/material"
import styles from "../styles/ItemCard.module.css"
import { useState } from "react"

const ItemCard = ({ item }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Grid item xs={12} sm={6} md={6} xl={3}>
      <div className={styles.card}>
        <img
          src={item.img}
          alt={item.title}
          className={styles.imgBackground}
          onClick={handleOpen}
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.boxModal}>
          <h2 className={styles.title}>{item.title}</h2>
          <h3 className={styles.textSubtitle}>
            {item.author || item.director || item.developer}
          </h3>
          <p className={styles.description}>{item.description}</p>
        </Box>
      </Modal>
    </Grid>
  )
}

export default ItemCard
