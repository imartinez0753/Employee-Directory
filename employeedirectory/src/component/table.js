import React from "react"
import { Table } from 'react-bootstrap';

function TableCom ({firstname, lastname, age, num}) {
  return(
  <div>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>firstname</th>
      <th>lastname</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{num}</td>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{age}</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
  </div>
  )}

  export default TableCom;
