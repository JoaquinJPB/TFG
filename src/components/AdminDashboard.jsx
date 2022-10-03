import { Grid } from "@mui/material"
import {
  useGetAdviceQuery,
  useGetBreathsQuery,
  useGetBooksQuery,
  useGetMeditationsQuery,
  useGetMoviesQuery,
  useGetVideogamesQuery,
} from "../libraries/api/apiSlice"
import { CheckRequest } from "../components/CheckRequest"

import TableDashboard from "../components/TableDashboard"

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
    <Grid container spacing={5} px={5} 
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    flexDirection={"column"}
    >
      <Grid item xs={12} sm={6}></Grid>
      <Grid item xs={12} sm={6}>
        <CheckRequest
          isLoading={isLoadingAdvice}
          isError={isErrorAdvice}
          refetch={refetchAdvice}
        >
          <TableDashboard request={advice} title={"Consejos"}></TableDashboard>
        </CheckRequest>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CheckRequest
          isLoading={isLoadingBreaths}
          isError={isErrorBreaths}
          refetch={refetchBreaths}
        >
          <TableDashboard
            request={breaths}
            title={"Respiración"}
          ></TableDashboard>
        </CheckRequest>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CheckRequest
          isLoading={isLoadingMeditations}
          isError={isErrorMeditations}
          refetch={refetchMeditations}
        >
          <TableDashboard
            request={meditations}
            title={"Meditación"}
          ></TableDashboard>
        </CheckRequest>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CheckRequest
          isLoading={isLoadingBooks}
          isError={isErrorBooks}
          refetch={refetchBooks}
        >
          <TableDashboard request={books} title={"Libros"}></TableDashboard>
        </CheckRequest>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CheckRequest
          isLoading={isLoadingMovies}
          isError={isErrorMovies}
          refetch={refetchMovies}
        >
          <TableDashboard request={movies} title={"Películas"}></TableDashboard>
        </CheckRequest>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CheckRequest
          isLoading={isLoadingVideogames}
          isError={isErrorVideogames}
          refetch={refetchVideogames}
        >
          <TableDashboard
            request={videogames}
            title={"Videojuegos"}
          ></TableDashboard>
        </CheckRequest>
      </Grid>
    </Grid>
  )
}

export default AdminDashboard
