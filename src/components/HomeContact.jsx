import { Box, Button, Grid, TextField } from "@mui/material"
import styles from "../styles/Home.module.css"

import imgHomeContact from "../images/undraw_contact_us_re_4qqt.svg"
import { useEmail } from "../hooks/useEmail"
import { useState } from "react"

const HomeContact = () => {
  const { sendEmail } = useEmail()

  const [name, setName] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  return (
    <Grid container spacing={5} px={5} mt={5}>
      <Grid
        item
        xs={12}
        md={7}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={5}
      >
        <figure>
          <img
            src={imgHomeContact}
            alt="Contact us"
            className={styles.imgHome}
          />
        </figure>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <h2 className={styles.contactTitle}>Contacto</h2>
        <Box
          component="form"
          sx={{ mt: 1, width: "100%" }}
          onSubmit={() => sendEmail(name, phoneNumber, email, message)}
        >
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12}>
              <TextField
                label="Nombre"
                placeholder="Introduce un nombre"
                variant="outlined"
                fullWidth
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                placeholder="Introduce un email"
                variant="outlined"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Teléfono"
                type="number"
                placeholder="Introduce un teléfono"
                variant="outlined"
                fullWidth
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Mensaje"
                multiline
                rows={4}
                placeholder="Introduce tu mensaje"
                variant="outlined"
                fullWidth
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ fontWeight: "bold" }}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default HomeContact
