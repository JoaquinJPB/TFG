import Header from "./Header"
import ExerciseGrid from "./ExerciseGrid"

import styles from "../styles/Advice.module.css"


const SectionComponent = ({title, subtitle, img, exercises}) => {
    return (
        <main className={styles.adviceBody}>
            <section>
                <Header title={title} subtitle={subtitle} />
                <img src={img} alt="Advice" />
            </section>
            <section>
                <div>
                    <h3>Consejos</h3>
                </div>
                <ExerciseGrid exercises={exercises}/>
            </section>
        </main>
    )
}

export default SectionComponent