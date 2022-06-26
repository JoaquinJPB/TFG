import Header from "./Header"
import ExerciseGrid from "./ExerciseGrid"

import styles from "../styles/Advice.module.css"
import imgAdviceBackground from "../images/Advice_Background.png"

import exercises from "../exercises.json"

const Advice = () => {
    return (
        <main className={styles.adviceBody}>
            <section>
                <Header title={"Consejos sobre la ansiedad social"} subtitle={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                <img src={imgAdviceBackground} alt="Advice" />
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

export default Advice