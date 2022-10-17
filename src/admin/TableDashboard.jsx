import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"

import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

const TableDashboard = ({ request, deleteItem }) => {

  return (
    <section>
      {request ? (
        <TableContainer>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Título</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {request.data.map((raw_data) => (
                <TableRow key={raw_data._id}>
                  <TableCell>{raw_data.title}</TableCell>
                  <TableCell>{raw_data.description}</TableCell>
                  <TableCell>
                    <Button onClick={() => deleteItem(raw_data._id)}>
                      <DeleteIcon />
                    </Button>
                    <Button>
                      <EditIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
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
