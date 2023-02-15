import { Box, Fade, Typography } from "@mui/material"
import { useState } from "react"
import { useEffect } from "react"

import HealingIcon from "@mui/icons-material/Healing"
import HomeSection from "../components/HomeSection"
import HomeAbout from "../components/HomeAbout"
import HomeContact from "../components/HomeContact"

const Home = () => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(true)
  }, [checked])

  return (
    <Fade in={checked}>
      <Box
        component="article"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyItems="items"
      >
        <Box
          component="section"
          textAlign="center"
          padding="2rem"
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          color="#fff"
          sx={{
            minHeight: "25vh",
            backgroundColor: "#8E6BBF",
          }}
        >
          <Box
            component="span"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <HealingIcon
              sx={{
                fontSize: "4rem",
                color: "white",
              }}
            />
            <Typography
              component="h1"
              variant="h1"
              fontSize="2.25rem"
              fontWeight="bold"
            >
              CSA: Care Social Anxiety
            </Typography>
          </Box>
          <Typography
            component="h2"
            variant="h2"
            fontSize="2rem"
            fontWeight="400"
            textAlign="center"
            mt={2}
          >
            Dedicada a proporcionar ayuda a las personas con trastorno de
            ansiedad social
          </Typography>
        </Box>
        <HomeSection />
        <HomeAbout />
        <HomeContact />
      </Box>
    </Fade>
  )
}

export default Home
