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
    <main className={styles.mainHome}>
      <section>
        <Header
          title={"Bienvenido"}
          subtitle={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet ornare venenatis. Duis ut imperdiet mi, quis posuere mi. Aliquam ac ante luctus, lobortis eros eu, tempor odio. Donec finibus congue ex, quis porta ex facilisis elementum. Sed at ligula dapibus, malesuada elit eu, consectetur tellus. Aenean elementum massa eget augue porttitor tempus. Etiam eleifend"
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
    </main>
  );
};

export default Home;
