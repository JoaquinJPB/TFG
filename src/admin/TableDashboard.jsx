import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material"

import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { useState } from "react"

import styles from "../styles/BoxModal.module.css"
import { useForm } from "react-hook-form"

const TableDashboard = ({ request, updateItem, deleteItem, options }) => {
  const [open, setOpen] = useState(false)
  const [_id, setId] = useState()

  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [roles, setRoles] = useState([])
  const rolesName = ["user", "moderator", "admin"]

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [img, setImg] = useState()
  const [founder, setFounder] = useState()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const fillData = (
    itemId,
    itemTitle,
    itemDescription,
    itemImg,
    itemFounder
  ) => {
    setId(itemId)
    setValue("title", itemTitle)
    setValue("description", itemDescription)
    setValue("img", itemImg)
    setValue("founder", itemFounder)
    handleOpen()
  }

  const fillDataUser = (
    itemId,
    itemUsername,
    itemEmail,
    itemPassword,
    itemRoles
  ) => {
    setId(itemId)
    setValue("username", itemUsername)
    setValue("email", itemEmail)
    setValue("password", itemPassword)
    setValue("multiple-chip-role", itemRoles)
    handleOpen()
  }

  const handleChangeRole = (event) => {
    const {
      target: { value },
    } = event
    setRoles(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    )
  }

  const handleFounderEdit = (options) => {
    switch (options) {
      case "Movies":
        updateItem({
          _id,
          title,
          description,
          img,
          director: founder,
        })
        break

      case "Books":
        updateItem({
          _id,
          title,
          description,
          img,
          author: founder,
        })
        break

      case "Videogames":
        updateItem({
          _id,
          title,
          description,
          img,
          developer: founder,
        })
        break
      default:
        break
    }
    handleClose()
  }

  return (
    <section>
      {request ? (
        <TableContainer>
          <Table
            sx={{ minWidth: 1000 }}
            size="medium"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                {options === "Users" ? (
                  <>
                    <TableCell sx={{ fontWeight: "bold" }}>Usuario</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Correo electrónico
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell sx={{ fontWeight: "bold" }}>Título</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Descripción
                    </TableCell>
                  </>
                )}
                {options === "Books" ? (
                  <TableCell sx={{ fontWeight: "bold" }}>Autor</TableCell>
                ) : (
                  <></>
                )}
                {options === "Movies" ? (
                  <TableCell sx={{ fontWeight: "bold" }}>Director</TableCell>
                ) : (
                  <></>
                )}
                {options === "Videogames" ? (
                  <TableCell sx={{ fontWeight: "bold" }}>
                    Desarrollador
                  </TableCell>
                ) : (
                  <></>
                )}
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {request.data.map((raw_data) => (
                <TableRow key={raw_data._id}>
                  <TableCell>{raw_data.title || raw_data.username}</TableCell>
                  <TableCell>
                    {raw_data.description || raw_data.email}
                  </TableCell>
                  {options === "Books" ||
                  options === "Movies" ||
                  options === "Videogames" ? (
                    <TableCell>
                      {raw_data.author ||
                        raw_data.director ||
                        raw_data.developer}
                    </TableCell>
                  ) : (
                    <></>
                  )}
                  <TableCell>
                    <Box display={"flex"}>
                      <Button>
                        <EditIcon
                          onClick={() => {
                            options === "Users"
                              ? fillDataUser(
                                  raw_data._id,
                                  raw_data.username,
                                  raw_data.email,
                                  raw_data.password,
                                  raw_data.roles
                                )
                              : fillData(
                                  raw_data._id,
                                  raw_data.title,
                                  raw_data.description,
                                  raw_data.img,
                                  raw_data.author ||
                                    raw_data.director ||
                                    raw_data.developer
                                )
                          }}
                        />
                      </Button>
                      <Button onClick={() => deleteItem(raw_data._id)}>
                        <DeleteIcon />
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
              {options === "Users" ? (
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    component="form"
                    className={styles.boxModal}
                    onSubmit={handleSubmit(() =>
                      updateItem({ _id, username, email, password })
                    )}
                  >
                    <TextField
                      {...register("username", {
                        required: true,
                      })}
                      required
                      name="username"
                      id="username"
                      label="Nombre de usuario"
                      variant="outlined"
                      fullWidth
                      onChange={(e) => {
                        setUsername(e.target.value)
                      }}
                      sx={{ marginBottom: "1.5rem" }}
                    />
                    <TextField
                      {...register("email", {
                        required: true,
                      })}
                      required
                      name="email"
                      id="email"
                      label="Correo electrónico"
                      type="email"
                      variant="outlined"
                      fullWidth
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                      sx={{ marginBottom: "1.5rem" }}
                    />
                    <TextField
                      {...register("password", {
                        required: true,
                      })}
                      required
                      name="password"
                      id="password"
                      label="Contraseña"
                      type="password"
                      variant="outlined"
                      fullWidth
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                      sx={{ marginBottom: "1.5rem" }}
                    />
                    <FormControl fullWidth>
                      <InputLabel id="chip-label-role">Rol</InputLabel>
                      <Select
                        labelId="chip-label-role"
                        id="multiple-chip-role"
                        multiple
                        value={roles}
                        onChange={handleChangeRole}
                        sx={{ marginBottom: "1.5rem" }}
                        input={
                          <OutlinedInput id="multiple-chip-role" label="Rol" />
                        }
                        renderValue={(selected) => (
                          <Box
                            sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                          >
                            {selected.map((value) => (
                              <Chip key={value} label={value} />
                            ))}
                          </Box>
                        )}
                      >
                        {rolesName.map((role) => (
                          <MenuItem key={role} value={role}>
                            {role}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{ fontWeight: "bold" }}
                    >
                      Actualizar
                    </Button>
                  </Box>
                </Modal>
              ) : (
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    component="form"
                    className={styles.boxModal}
                    onSubmit={handleSubmit(() => handleFounderEdit(options))}
                  >
                    <TextField
                      {...register("title", {
                        required: true,
                      })}
                      required
                      name="title"
                      id="title"
                      label="Título"
                      variant="outlined"
                      fullWidth
                      onChange={(e) => {
                        setTitle(e.target.value)
                      }}
                      sx={{ marginBottom: "1.5rem" }}
                    />
                    {errors.title && (
                      <Typography
                        fullWidth
                        sx={{
                          color: "red",
                        }}
                      >
                        Escriba un título válido.
                      </Typography>
                    )}
                    <TextField
                      {...register("description", {
                        required: true,
                      })}
                      required
                      name="description"
                      id="description"
                      label="Descripción"
                      variant="outlined"
                      fullWidth
                      onChange={(e) => {
                        setDescription(e.target.value)
                      }}
                      sx={{ marginBottom: "1.5rem" }}
                    />
                    {errors.description && (
                      <Typography
                        fullWidth
                        sx={{
                          color: "red",
                        }}
                      >
                        Escriba una descripción válida.
                      </Typography>
                    )}
                    {options === "Books" ||
                    options === "Movies" ||
                    options === "Videogames" ? (
                      <TextField
                        {...register("founder", {
                          required: true,
                        })}
                        required
                        name="founder"
                        id="founder"
                        label="Autor/Director/Desarrolladora"
                        variant="outlined"
                        fullWidth
                        onChange={(e) => {
                          setFounder(e.target.value)
                        }}
                        sx={{ marginBottom: "1.5rem" }}
                      />
                    ) : (
                      <></>
                    )}
                    <TextField
                      {...register("img", {
                        required: true,
                      })}
                      required
                      id="img"
                      name="img"
                      label="URL Img"
                      variant="outlined"
                      fullWidth
                      onChange={(e) => {
                        setImg(e.target.value)
                      }}
                      sx={{ marginBottom: "1.5rem" }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{ fontWeight: "bold" }}
                    >
                      Actualizar
                    </Button>
                  </Box>
                </Modal>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <></>
      )}
    </section>
  )
}

export default TableDashboard
