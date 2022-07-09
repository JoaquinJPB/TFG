import styles from "../styles/Home.module.css";
import HomeSectionCard from "../components/HomeSectionCard";

import imgBreathing from "../images/breathing_section.png";
import imgMeditation from "../images/meditation_section.png";
import imgRecommendations from "../images/recommendations_section.png";
import imgAdvice from "../images/advice_section.png";
import Header from "../components/Header";

import imgHome from "../images/Welcome_Background.png";

const Home = () => {
  return (
    <article className={styles.articleHome}>
      <section>
        <Header
          title={"Bienvenido"}
          subtitle={
            'En el trastorno de ansiedad social, el miedo y la ansiedad conducen a una abstención que puede alterar tu vida. El estrés grave puede afectar a tus relaciones, la rutina diaria, el trabajo, la escuela u otras actividades. Por eso hemos preparado esta plataforma donde podras encontrar una gran cantidad de recursos que te podran ayudar a sobrellevar este problema.'
          }
        />
        <div className={styles.headerSection}>
          <h2>Secciones</h2>
        </div>
        <div className={styles.homeCards}>
          <HomeSectionCard
            title={"Técnicas de respiración"}
            img={imgBreathing}
            route={"breathing"}
          />
          <HomeSectionCard
            title={"Meditación"}
            img={imgMeditation}
            route={"meditation"}
          />
          <HomeSectionCard
            title={"Recomendaciones"}
            img={imgRecommendations}
            route={"recommendations"}
          />
          <HomeSectionCard
            title={"Consejos"}
            img={imgAdvice}
            route={"advice"}
          />
        </div>
      </section>
      <section>
        <img src={imgHome} alt="Welcome" />
      </section>
    </article>
  );
};

export default Home;
