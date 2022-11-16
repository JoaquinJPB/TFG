import imgBreathingBackground from "../images/undraw_yoga_re_i5ld.svg"
import SectionLayout from "../components/SectionLayout"
import { useGetBreathsQuery } from "../libraries/api/apiSlice"
import { CheckRequest } from "../components/CheckRequest"

const Breathing = () => {
  const { data: breaths, isLoading, isError, refetch } = useGetBreathsQuery()
  return (
    <CheckRequest isLoading={isLoading} isError={isError} refetch={refetch}>
      <SectionLayout
        title={"Respiración"}
        img={imgBreathingBackground}
        exercises={breaths}
      />
    </CheckRequest>
  )
}

export default Breathing
