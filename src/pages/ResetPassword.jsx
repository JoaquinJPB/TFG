import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import LockIcon from "@mui/icons-material/Lock"
import { useState } from "react"
import { useResetPassword } from "../hooks/useResetPassword"
import { useForm } from "react-hook-form"

const ResetPassword = () => {
  const { resetPassword } = useResetPassword()

  const [email, setEmail] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", marginBottom: "-3rem" }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <CssBaseline />
      <Grid item xs={12} md={3} component={Paper} elevation={10} square>
        <Box
          sx={{
            my: 4,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LockIcon sx={{ m: 1, fontSize: "2.5rem" }} className="sign-icons">
            <LockOutlinedIcon />
          </LockIcon>
          <Typography component="h1" variant="h5">
            Restablecer contraseña
          </Typography>
          <Box
            component="form"
            sx={{ mt: 1, width: "100%" }}
            onSubmit={handleSubmit(() => resetPassword(email))}
          >
            <TextField
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              label="Correo electrónico"
              name="email"
              autoComplete="email"
              autoFocus
              variant="filled"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <Typography
                fullWidth
                sx={{
                  color: "red",
                }}
              >
                Escriba una email válido.
              </Typography>
            )}
            <Button
              type="submit"
              color="primary"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                fontWeight: "bold",
                fontSize: "1.25rem",
              }}
            >
              Enviar correo
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default ResetPassword
