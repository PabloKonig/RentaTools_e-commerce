/* eslint-disable react/prop-types */
import { useContext } from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Button } from "@mui/material"
import "./styles.css"
import Swal from "sweetalert2/dist/sweetalert2.js"

import "sweetalert2/src/sweetalert2.scss"
import { ContextGlobal } from "../../api/global.context.helper"
import { deleteProduct } from "../../api/requestHandlers"

const AdminTable = ({ products, setIsProductDeleted }) => {
  const { categories } = useContext(ContextGlobal)
  const categoriesById = categories.reduce((obj, item) => Object.assign(obj, { [item.id]: item.name }), {})

  function handleDeleteProduct(id) {
    Swal.fire({
      title: "Eliminar producto",
      text: "Está seguro que desea eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteProduct(id)
        if (response.status === 200) {
          setIsProductDeleted(true)
          Swal.fire("Producto eliminado.", "", "success")
        } else {
          Swal.fire("Hubo un error", response.status.toString(), "error")
        }
      } else {
        Swal.fire("Operación cancelada.", "", "info")
      }
    })
  }

  return (
    <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className="table-header">
              ID
            </TableCell>
            <TableCell align="center" className="table-header">
              Nombre
            </TableCell>
            <TableCell align="center" className="table-header">
              Código de producto
            </TableCell>
            <TableCell align="center" className="table-header">
              Descripción corta
            </TableCell>
            <TableCell align="center" className="table-header">
              Categoría
            </TableCell>
            <TableCell align="center" className="table-header">
              Acciones
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(({ id, name, productCode, shortDescription, category }) => (
            <TableRow key={id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row" align="center">
                {id}
              </TableCell>

              <TableCell align="center">{name}</TableCell>
              <TableCell align="center">{productCode}</TableCell>
              <TableCell align="center">{shortDescription}</TableCell>
              <TableCell align="center">{categoriesById[category.id]}</TableCell>
              <TableCell align="center">
                <div className="table-buttons">
                  <Button variant="outlined" onClick={() => handleDeleteProduct(id)} className="button button-delete">
                    Eliminar
                  </Button>
                  <Button variant="contained" type="submit" className="button button-edit">
                    Editar
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AdminTable
