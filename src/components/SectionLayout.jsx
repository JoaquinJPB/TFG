import Header from "./Header";
import ExerciseGrid from "./ExerciseGrid";

import styles from "../styles/SectionLayout.module.css";

const SectionLayout = ({ title, subtitle, img, exercises }) => {
  return (
    <main className={styles.sectionLayoutBody}>
      <section>
        <Header title={title} subtitle={subtitle} />
        <img src={img} alt={title} />
      </section>
      <section>
        <div>
          <h3>Ejercicios</h3>
        </div>
        <ExerciseGrid exercises={exercises} />
      </section>
    </main>
  );
};

export default SectionLayout;
