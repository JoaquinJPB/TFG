import HomeSectionCard from './HomeSectionCard'

import imgBreathing from "../images/breathing_section.png"
import imgMeditation from "../images/meditation_section.png"
import imgRecommendations from "../images/recommendations_section.png"
import imgAdvice from "../images/advice_section.png"
import imgHome from "../images/undraw_welcome_re_h3d9.svg"
import { Grid } from "@mui/material"
import styles from "../styles/Home.module.css"

function HomeSection() {
  return (
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
  )
}

export default HomeSection