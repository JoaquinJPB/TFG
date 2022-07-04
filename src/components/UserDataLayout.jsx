import Button from "@mui/material/Button";
import Header from "./Header";
import ItemCard from "./ItemCard";

import userImg from "../images/Profile_Avatar.png";
import profileBackground from "../images/Profile_Background.png";

import styles from "../styles/UserDataLayout.module.css";
import stylesGrid from "../styles/ItemsGrid.module.css";


const UserDataLayout = ({ userName, fullName, userEmail, itemsFav }) => {
  return (
    <section className={styles.sectionProfile}>
      <div>
        <Header title={"Mi perfil"} subtitle={""} />
        <div>
          <img src={userImg} alt="Imagen de perfil" />
          <div>
            <h2>{userName}</h2>
            <span>{fullName}</span>
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
        <article>
          <ul className={stylesGrid.itemsGrid}>
            {itemsFav.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </ul>
        </article>
      </div>
      <div>
        <img src={profileBackground} alt="Fondo detalles de la cuenta" />
      </div>
    </section>
  );
};

export default UserDataLayout;
