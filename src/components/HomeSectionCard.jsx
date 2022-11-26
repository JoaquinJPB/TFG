import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const HomeSectionCard = ({ title, img, route }) => {
  const navigate = useNavigate()

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      textAlign="center"
      mt={4}
      sx={{
        backgroundColor: "var(--primaryColor)",
        borderRadius: "2rem",
        boxShadow: "-3px 7px 5px -3px rgba(0, 0, 0, 0.75)",
        width: "100%",
        height: "100%",
        border: "2px solid transparent",
        "&:hover": {
          opacity: "0.8",
          border: "2px solid black",
          cursor: "pointer",
        },
      }}
      onClick={() => navigate(route)}
    >
      <Box component="img" src={img} alt={title} />
      <Typography Typography variant="h5" component="h3" color="#fff">
        {title}
      </Typography>
    </Box>
  )
}

export default HomeSectionCard
