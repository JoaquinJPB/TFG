import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import PasswordIcon from "@mui/icons-material/Password"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import { useResetPassword } from "../hooks/useResetPassword"

const NewPassword = () => {
  const { token } = useParams()
  const { newPassword } = useResetPassword()
  const [password, setPassword] = useState("")
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
          <PasswordIcon
            sx={{ m: 1, fontSize: "2.5rem" }}
            className="sign-icons"
          >
            <LockOutlinedIcon />
          </PasswordIcon>
          <Typography component="h1" variant="h5">
            Establecer nueva contraseña
          </Typography>
          <Box
            component="form"
            sx={{ mt: 1, width: "100%" }}
            onSubmit={handleSubmit(() => newPassword(token, password))}
          >
            <TextField
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,64}$/,
              })}
              margin="normal"
              required
              fullWidth
              type="password"
              id="password"
              label="Nueva contraseña"
              name="password"
              autoComplete="password"
              autoFocus
              variant="filled"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <Typography
                fullWidth
                sx={{
                  color: "red",
                }}
              >
                Escriba una contraseña válida, Mínimo 1 mayúscula, 1 minúscula,
                1 número, 1 caracter especial y minimo 8 caracteres
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
              Establecer contraseña
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default NewPassword
