import { Grid } from "@mui/material"
import styles from "../styles/Home.module.css"
import imgHomeAbout from "../images/undraw_engineering_team_a7n2.svg"

const HomeAbout = () => {
  return (
    <Grid container spacing={5} px={5} mt={5}>
      <Grid
        item
        xs={12}
        md={6}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <section>
          <h2 className={styles.aboutTitle}>About</h2>
          <p className={styles.aboutDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            fringilla vehicula tristique. Maecenas viverra congue lacus
            ultricies feugiat. Sed quis enim et nisl volutpat lacinia sit amet
            ut mi. Quisque eget arcu nunc. Curabitur magna sapien, consectetur
            et iaculis a, maximus quis orci. Duis rhoncus iaculis suscipit. In
            fermentum urna eget molestie convallis. Vestibulum sed elit sit amet
            enim ultrices scelerisque vel vel sem. Nam consequat ex vel diam
            posuere, eu rutrum quam tincidunt. Nulla quis dolor at leo ultricies
            dignissim in vel
          </p>
        </section>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <figure>
          <img src={imgHomeAbout} alt="About us" className={styles.imgHome} />
        </figure>
      </Grid>
    </Grid>
  )
}

export default HomeAbout
