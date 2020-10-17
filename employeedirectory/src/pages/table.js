import React, { Component } from "react";
import { Table } from 'react-bootstrap';




class TableMake extends Component {
  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
       students: [
          { id: 1, name: 'Guy', age: 21, lastName: 'McGuy' },
          { id: 2, name: 'Dude', age: 19, lastName: 'Duderson' },
          { id: 3, name: 'Sally', age: 16, lastName: 'Sue Joe Bob' },
          { id: 4, name: 'Lady', age: 25, lastName: 'Face' }
       ]
    }
 }
 renderTableData() {
  return this.state.students.map((student, index) => {
     const { id, name, age, lastName } = student //destructuring
     return (
        <tr key={id}>
           <td>{id}</td>
           <td>{name}</td>
           <td>{lastName}</td>
           <td>{age}</td>
        </tr>
     )
  })
}


render() {
  return (
<div>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    
  {this.renderTableData()}
    
    
  </tbody>
</Table>
     
     </div>
  )
  }}
  export default TableMake