import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { Link } from "react-router-dom"

import styles from "../styles/StickyFooter.module.css"

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "25vh",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "var(--secondaryColor)",
        position: 'relative',
        bottom: '0',
        marginTop: '3rem'
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ padding:5 }} maxWidth="sm">
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: "white" }}
        >
          Care Social Anxiety
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            textAlign: "center",
            color: "white",
          }}
          className={styles.footerBoxLink}
        >
          <Link to="/" className={styles.footerItemLink}>Inicio</Link>
          <Link to="/advice" className={styles.footerItemLink}>Consejos</Link>
          <Link to="/breathing" className={styles.footerItemLink}>Respiración</Link>
          <Link to="/meditation" className={styles.footerItemLink}>Meditación</Link>
          <Link to="/recommendations" className={styles.footerItemLink}>Recomendaciones</Link>
        </Box>
        <Container maxWidth="sm"  sx={{
            marginTop: '1rem',
            color: "#808080",
          }}>
					<Typography variant="body1">© Joaquin Pastore Barrios</Typography>
				</Container>
      </Container>
    </Box>
  )
}
