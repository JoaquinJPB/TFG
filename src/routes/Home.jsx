import styles from "../styles/Home.module.css"
import HomeSectionCard from "../components/HomeSectionCard"

import imgBreathing from "../images/breathing_section.png"
import imgMeditation from "../images/meditation_section.png"
import imgRecommendations from "../images/recommendations_section.png"
import imgAdvice from "../images/advice_section.png"
import { MainLayout } from "../layouts/MainLayout"

const Home = () => {
  return (
    <MainLayout>
      <article className={styles.articleHome}>
        <section className={styles.headerHome}>
          <h1>Redux Toolkit</h1>
          <h3>
            The official, opinionated, batteries-included toolset for efficient
            Redux development
          </h3>
          <button>
            <span className={styles.button_top}>Button</span>
          </button>
        </section>
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
        <section></section>
      </article>
    </MainLayout>
  )
}

export default Home
