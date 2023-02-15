import imgAdviceBackground from "../images/undraw_positive_attitude_re_wu7d.svg"
import SectionLayout from "../components/SectionLayout"
import { useGetAdviceQuery } from "../libraries/api/apiSlice"
import { CheckRequest } from "../components/CheckRequest"

const Advice = () => {
  const { data: advice, isLoading, isError, refetch } = useGetAdviceQuery()
  return (
    <CheckRequest isLoading={isLoading} isError={isError} refetch={refetch}>
      <SectionLayout
        title={"Consejos"}
        img={imgAdviceBackground}
        exercises={advice}
      />
    </CheckRequest>
  )
}

export default Advice
