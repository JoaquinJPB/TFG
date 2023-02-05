import { Box, Grid, Typography } from "@mui/material"
import Header from "./Header"

import styles from "../styles/UserDataLayout.module.css"
import userImg from "../images/Profile_Avatar.png"
import profileBackground from "../images/undraw_profile_details_re_ch9r.svg"

const UserDataLayout = ({ userName, userEmail }) => {
  return (
    <Grid container px={5} mt={1}>
      <Grid
        item
        xs={12}
        md={6}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Box>
          <Header title={"Mi perfil"} subtitle={""} />
          <img src={userImg} alt="Imagen de perfil" className={styles.profileImg}/>
          <Typography
            component="h2"
            variant="h2"
            fontSize="2rem"
            fontWeight="400"
            textAlign="center"
            mt={2}
          >
            {userName}
          </Typography>
          <Typography component="h5" variant="h5" textAlign="center" mt={2}>
            {userEmail}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={2}
      >
        <img
          className={styles.profileBackground}
          src={profileBackground}
          alt="Fondo detalles de la cuenta"
        />
      </Grid>
    </Grid>
  )
}

export default UserDataLayout
