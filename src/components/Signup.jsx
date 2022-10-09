import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

import PersonIcon from "@mui/icons-material/Person"

import background from "../images/Wallpaper_Website.png"
import { useRegister } from "../hooks/useRegister"
import { useState } from "react"

import { useForm } from "react-hook-form"

const SignUp = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signUpUser } = useRegister()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleSubmitRegister = () => {
    signUpUser(username, email.toLowerCase(), password)
  }

  return (
    <Container
      component="main"
      maxWidth="false"
      className="main-sign-up"
      sx={{
        height: "100vh",
        overflow: "disable",
        // backgroundImage: `url(${background})`,
        // backgroundRepeat: "no-repeat",
        // backgroundColor: "rgba(0,0,0,0.5)",
        backgroundSize: "cover",
        marginBottom: "-3rem",
      }}
    >
      <Container component="section" maxWidth="xs" className="sign-in">
        <CssBaseline />
        <Box
          sx={{
            paddingTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PersonIcon
            sx={{
              fontSize: "2.5rem",
              color: "white",
            }}
            className="sign-icons"
          >
            <LockOutlinedIcon />
          </PersonIcon>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Crear tu cuenta
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(handleSubmitRegister)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  {...register("username", { required: true, pattern: /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/ })}
                  autoComplete="given-name"
                  required
                  fullWidth
                  name="username"
                  id="username"
                  label="Nombre de usuario"
                  autoFocus
                  variant="filled"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              {errors.username && (
                  <Typography
                    fullWidth
                    sx={{
                      color: "red",
                    }}
                  >
                    Escriba un nombre válido.
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  label="Correo electrónico"
                  value={email}
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                  }}
                  variant="filled"
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,64}$/ })}
                  required
                  fullWidth
                  type="password"
                  name="password"
                  id="password"
                  label="Contraseña"
                  autoComplete="new-password"
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
                    Escriba una contraseña válida, Mínimo 1 mayúscula, 1
                    minúscula, 1 número, 1 caracter especial y minimo 8 caracteres
                  </Typography>
                )}
              </Grid>
            </Grid>
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
              Crear una cuenta
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="/login"
                  variant="body2"
                  sx={{
                    color: "white",
                    textDecorationColor: "white",
                  }}
                >
                  ¿Ya tienes una cuenta?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Container>
  )
}

export default SignUp
