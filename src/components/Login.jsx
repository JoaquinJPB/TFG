import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import PersonIcon from "@mui/icons-material/Person"

import background from "../images/undraw_login_re_4vu2.svg"
import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import { useForm } from "react-hook-form"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useLogin()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleSubmitLogin = () => {
    login(email.toLowerCase(), password)
  }

  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", marginBottom: "-3rem"}}
    >
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={false}
        md={7}
        sx={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          marginTop: "4rem"
        }}
      />
      <Grid item xs={12} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PersonIcon sx={{ m: 1, fontSize: "2.5rem" }} className="sign-icons">
            <LockOutlinedIcon />
          </PersonIcon>
          <Typography component="h1" variant="h5">
            ¡Hola de nuevo! 👋
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(handleSubmitLogin)}
            sx={{ mt: 1, width: "100%" }}
          >
            <TextField
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              margin="normal"
              required
              fullWidth
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
                Escriba un correo electrónico válido
              </Typography>
            )}
            <TextField
              {...register("password", { required: true })}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="filled"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
              Iniciar sesión
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"¿No tienes una cuenta? Registrate"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Login
