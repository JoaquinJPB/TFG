import styles from "../styles/Home.module.css"

import HealingIcon from "@mui/icons-material/Healing"
import HomeSection from "../components/HomeSection"
import HomeAbout from "../components/HomeAbout"
import HomeContact from "../components/HomeContact"

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
			<HomeSection />
			<HomeAbout />
			<HomeContact />
		</article>
	)
}

export default Home
