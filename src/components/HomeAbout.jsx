import { Grid } from "@mui/material"

import imgHomeAbout from "../images/undraw_engineering_team_a7n2.svg"

const HomeAbout =  () => {
  return (
    <Grid container spacing={5} px={5} mt={5}>
      <Grid
					item
					xs={12}
					md={5}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
          <section>

          </section>
        </Grid>
        <Grid
					item
					xs={12}
					md={7}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
          <figure>
						<img src={imgHomeAbout} alt="About us" />
					</figure>
        </Grid>
    </Grid>
  )
}

export default HomeAbout