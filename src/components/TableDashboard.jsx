import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material"

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TableDashboard = ({ request, title }) => {
  return (
    <section>
      {request ? (
        <div>
          <h2>{title}</h2>
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
                <TableRow>
                  <TableCell>{raw_data.title}</TableCell>
                  <TableCell>{raw_data.description}</TableCell>
                  <TableCell>
                    <DeleteIcon/>
                    <EditIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <></>
      )}
    </section>
  )
}

export default TableDashboard
