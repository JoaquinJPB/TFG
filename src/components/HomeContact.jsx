import { Grid } from "@mui/material"

import imgHomeContact from "../images/undraw_contact_us_re_4qqt.svg"

const HomeContact = () => {
  return (
    <Grid container spacing={5} px={5} mt={5}>
      <Grid
					item
					xs={12}
					md={7}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
					mt={5}
				>
          <figure>
						<img src={imgHomeContact} alt="Contact us" />
					</figure>
        </Grid>
        <Grid
					item
					xs={12}
					md={5}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
          
        </Grid>
    </Grid>
  )
}

export default HomeContact
