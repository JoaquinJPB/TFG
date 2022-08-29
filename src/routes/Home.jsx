import styles from "../styles/Home.module.css"
import HomeSectionCard from "../components/HomeSectionCard"

import imgBreathing from "../images/breathing_section.png"
import imgMeditation from "../images/meditation_section.png"
import imgRecommendations from "../images/recommendations_section.png"
import imgAdvice from "../images/advice_section.png"
import imgHome from "../images/undraw_welcome_re_h3d9.svg"
import { Grid } from "@mui/material"
import HealingIcon from "@mui/icons-material/Healing"

const Home = () => {
	return (
		<article className={styles.articleHome}>
			<section className={styles.headerHome}>
				<span className={styles.titleBox}>
					<HealingIcon
						sx={{
							fontSize: "4rem",
							color: "white",
						}}
					/>
					<h1>CSA: Care Social Anxiety</h1>
				</span>
				<h2>
					Dedicada a proporcionar ayuda a las personas con trastorno de ansiedad
					social
				</h2>
			</section>
			<Grid container spacing={5} px={5}>
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
						<img src={imgHome} alt="Welcome" className={styles.imgHome} />
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
					<Grid container>
						<Grid
							xs={12}
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
						>
							<h2 className={styles.sectionTitle}>Secciones</h2>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							display={"flex"}
							justifyContent={"center"}
							p={2}
						>
							<HomeSectionCard
								title={"Respiración"}
								img={imgBreathing}
								route={"breathing"}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							display={"flex"}
							justifyContent={"center"}
							p={2}
						>
							<HomeSectionCard
								title={"Meditación"}
								img={imgMeditation}
								route={"meditation"}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							display={"flex"}
							justifyContent={"center"}
							p={2}
						>
							<HomeSectionCard
								title={"Recomendaciones"}
								img={imgRecommendations}
								route={"recommendations"}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}
							display={"flex"}
							justifyContent={"center"}
							p={2}
						>
							<HomeSectionCard
								title={"Consejos"}
								img={imgAdvice}
								route={"advice"}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</article>
	)
}

export default Home
