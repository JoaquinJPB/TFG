import SectionCard from "../components/SectionCard";

import recomentationBackground from "../images/Recommendations_Background.png";
import booksImg from "../images/Books_Background.png";
import moviesImg from "../images/Movies_Background.png";
import VideogamesImg from "../images/Videogames_Background.png";

import styles from "../styles/Recommendations.module.css";
import Header from "../components/Header";

const Recomendations = () => {
  return (
    <main className={styles.recommendationBody}>
      <section>
        <img src={recomentationBackground} alt="Recomendaciones" />
      </section>
      <section className={styles.recommendationRightBody}>
        <Header
          title={"Recomendaciones"}
          subtitle={
            "En este apartado enconctraras una gran cantidad de recomendaciones tanto de libros, películas, y videojuegos para comprender y sobrellevar la ansiedad social de la mejor forma posible."
          }
        />
        <div className={styles.sectionCards}>
          <SectionCard title={"Lectura"} img={booksImg} route={"books"} />
          <SectionCard title={"Películas"} img={moviesImg} route={"movies"} />
          <SectionCard
            title={"Videojuegos"}
            img={VideogamesImg}
            route={"videogames"}
          />
        </div>
      </section>
    </main>
  );
};

export default Recomendations;
