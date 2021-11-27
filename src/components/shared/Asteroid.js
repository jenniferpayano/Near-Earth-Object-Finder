import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
class Asteroids extends Component{

render(asteroid) {
  
  let { asteroids } = this.asteroid;

  return(
    <div>
    <p> Number of Earth Objects = {asteroids.length} </p>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hazardous</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr key={asteroids.key}>
            <td>{asteroids.name}</td>
            <td>{asteroids.date}</td>
            <td> {asteroids.is_potentionally_hazardous_asteroid}</td>
          </tr>


        </tbody>
      </Table>
    </div>
  )
}
}
export default Asteroids;