import { Grid } from "@mui/material"
import {
  useGetAdviceQuery,
  useGetBreathsQuery,
  useGetBooksQuery,
  useGetMeditationsQuery,
  useGetMoviesQuery,
  useGetVideogamesQuery,
} from "../libraries/api/apiSlice"
import { CheckRequest } from "./CheckRequest"

import TableDashboard from "./TableDashboard"

const AdminDashboard = () => {
  const {
    data: advice,
    isLoadingAdvice,
    isErrorAdvice,
    refetchAdvice,
  } = useGetAdviceQuery()
  const {
    data: breaths,
    isLoadingBreaths,
    isErrorBreaths,
    refetchBreaths,
  } = useGetBreathsQuery()
  const {
    data: meditations,
    isLoadingMeditations,
    isErrorMeditations,
    refetchMeditations,
  } = useGetMeditationsQuery()

  const {
    data: books,
    isLoadingBooks,
    isErrorBooks,
    refetchBooks,
  } = useGetBooksQuery()
  const {
    data: movies,
    isLoadingMovies,
    isErrorMovies,
    refetchMovies,
  } = useGetMoviesQuery()
  const {
    data: videogames,
    isLoadingVideogames,
    isErrorVideogames,
    refetchVideogames,
  } = useGetVideogamesQuery()
  
  return (
    <Grid container>
      <Grid item></Grid>
      <Grid item>
        <CheckRequest
          isLoading={isLoadingAdvice}
          isError={isErrorAdvice}
          refetch={refetchAdvice}
        >
          <TableDashboard data={advice}></TableDashboard>
        </CheckRequest>
      </Grid>
      <Grid item>
        <CheckRequest
          isLoading={isLoadingBreaths}
          isError={isErrorBreaths}
          refetch={refetchBreaths}
        >
          <TableDashboard data={breaths}></TableDashboard>
        </CheckRequest>
      </Grid>
      <Grid item>
        <CheckRequest
          isLoading={isLoadingMeditations}
          isError={isErrorMeditations}
          refetch={refetchMeditations}
        >
          <TableDashboard data={meditations}></TableDashboard>
        </CheckRequest>
      </Grid>
      <Grid item>
        <CheckRequest
          isLoading={isLoadingBooks}
          isError={isErrorBooks}
          refetch={refetchBooks}
        >
          <TableDashboard data={books}></TableDashboard>
        </CheckRequest>
      </Grid>
      <Grid item>
        <CheckRequest
          isLoading={isLoadingMovies}
          isError={isErrorMovies}
          refetch={refetchMovies}
        >
          <TableDashboard data={movies}></TableDashboard>
        </CheckRequest>
      </Grid>
      <Grid item>
        <CheckRequest
          isLoading={isLoadingVideogames}
          isError={isErrorVideogames}
          refetch={refetchVideogames}
        >
          <TableDashboard data={videogames}></TableDashboard>
        </CheckRequest>
      </Grid>
    </Grid>
  )
}

export default AdminDashboard
