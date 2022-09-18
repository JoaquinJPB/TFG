import Button from "@mui/material/Button"
import Header from "./Header"
import ItemCard from "./ItemCard"
import stylesGrid from "../styles/ItemsGrid.module.css"

import userImg from "../images/Profile_Avatar.png"
import profileBackground from "../images/undraw_profile_details_re_ch9r.svg"

import styles from "../styles/UserDataLayout.module.css"

import { Grid } from "@mui/material"

const UserDataLayout = ({ userName, fullName, userEmail, itemsFav }) => {
	return (
		<Grid container spacing={5} px={5} mt={1}>
			<Grid
				item
				xs={12}
				md={5}
				display={"flex"}
        flexDirection={"column"}
			>
				<Header title={"Mi perfil"} subtitle={""} />
				<div className={styles.userDataSection}>
					<img src={userImg} alt="Imagen de perfil" />
					<div>
						<h2>{userName}</h2>
						<span>{userEmail}</span>
						<Button
							type="submit"
							variant="contained"
							fullWidth
							sx={{ fontWeight: "bold", marginTop: "1rem" }}
						>
							Cambiar detalles de la cuenta
						</Button>
					</div>
				</div>
			</Grid>
			<Grid
				item
				xs={12}
				md={7}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<img className={styles.profileBackground}src={profileBackground} alt="Fondo detalles de la cuenta" />
			</Grid>
		</Grid>
	)
}

export default UserDataLayout
