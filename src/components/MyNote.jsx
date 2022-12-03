import { Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"

const MyNote = ({ note }) => {

  const dateFormat = new Date(Date.parse(note.date)).toLocaleDateString('es-ES')

  return (
    <Box component="div" mb={1} display="flex" justifyContent="center" alignItems="center">
      <Paper
        sx={{
          backgroundColor: "var(--primaryColor)",
          width: "100%",
          height: "325px",
          padding: "1rem",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
          color: "#fff"
        }}
      >
        <Typography
          component="h4"
          variant="h4"
          fontWeight="600"
          fontSize="1.5rem"
        >
          {note.title}
        </Typography>
        <Typography
          component="h5"
          variant="h5"
          fontWeight="200"
          fontSize="1.15rem"
        >
          {dateFormat}
        </Typography>
        <Typography
          component="p"
          variant="p"
          fontWeight="400"
          fontSize="1rem"
          mt={2}
        >
          {note.description}
        </Typography>
      </Paper>
    </Box>
  )
}

export default MyNote
