import { Box, Typography } from "@mui/material"

const Header = ({ title }) => {
  return (
    <Box component="header">
      <Box
        display="flex"
        flex-direction="column"
        align-items="center"
        justifyContent="center"
      >
        <Typography
          component="h1"
          variant="h1"
          sx={{
            margin: "1rem 0",
            textAlign: "center",
            color: "var(--primaryColor)",
            fontSize: "2.25rem",
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  )
}

export default Header
