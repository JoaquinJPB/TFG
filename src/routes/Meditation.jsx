import SectionLayout from "../components/SectionLayout"

import imgMeditationBackground from "../images/undraw_mindfulness_re_mmj6.svg"
import { useGetMeditationsQuery } from "../libraries/api/apiSlice"
import { CheckRequest } from "../components/CheckRequest"

const Meditation = () => {
  const {
    data: meditations,
    isLoading,
    isError,
    refetch
  } = useGetMeditationsQuery()
  return (
    <CheckRequest isLoading={isLoading} isError={isError} refetch={refetch}>
      <SectionLayout
        title={"Meditación"}
        img={imgMeditationBackground}
        exercises={meditations}
      />
    </CheckRequest>
  )
}

export default Meditation
