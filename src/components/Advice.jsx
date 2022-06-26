
import imgAdviceBackground from "../images/Advice_Background.png"
import exercises from "../exercises.json"
import SectionComponent from "./SectionComponent"

const Advice = () => {
    return (
        <SectionComponent title={"Consejos sobre la ansiedad social"} subtitle={"Prueba de ansiedad social"} img={imgAdviceBackground} exercises={exercises}/>
    )
}

export default Advice