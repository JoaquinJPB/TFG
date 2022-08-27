import Button from "@mui/material/Button";
import Header from "./Header";
import ItemCard from "./ItemCard";

import userImg from "../images/Profile_Avatar.png";
import profileBackground from "../images/Profile_Background.png";

import styles from "../styles/UserDataLayout.module.css";
import stylesGrid from "../styles/ItemsGrid.module.css";


const UserDataLayout = ({ userName, fullName, userEmail, itemsFav }) => {
  return (
    <article className={styles.articleProfile}>
      <section>
        <Header title={"Mi perfil"} subtitle={""} />
        <div className={styles.userDataSection}>
          <img src={userImg} alt="Imagen de perfil" />
          <div>
            <h2>{userName}</h2>
            <span>{userEmail}</span>
            <Button
              variant="contained"
              sx={{
                mt: 2.5,
                backgroundColor: "var(--secondaryColor)",
                fontWeight: "bold",
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "var(--primaryColor)",
                },
              }}
            >
              Cambiar detalles de la cuenta
            </Button>
          </div>
        </div>
        <Header title={"Contenido favorito"} subtitle={""} />
        <section className={styles.favItems}>
          <ul className={stylesGrid.itemsGrid}>
            {itemsFav.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </ul>
        </section>
      </section>
      <section>
        <img src={profileBackground} alt="Fondo detalles de la cuenta" />
      </section>
    </article>
  );
};

export default UserDataLayout;
