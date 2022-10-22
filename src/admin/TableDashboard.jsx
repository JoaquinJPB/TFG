import {
  Box,
  Button,
  Modal,
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
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [img, setImg] = useState()
  const [founder, setFounder] = useState()

  console.log("State initial =>", _id, title, description, img, founder)

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
                          onClick={() =>
                            fillData(
                              raw_data._id,
                              raw_data.title,
                              raw_data.description,
                              raw_data.img,
                              raw_data.author ||
                                raw_data.director ||
                                raw_data.developer
                            )
                          }
                        />
                      </Button>
                      <Button onClick={() => deleteItem(raw_data._id)}>
                        <DeleteIcon />
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
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
                    updateItem({ _id, title, description, img })
                  )}
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
