import React, { Component } from 'react';
import { ProgressBar, Table } from 'react-bootstrap'
class Asteroids extends Component{

render() {
  let { asteroids } = this.props;

  return(
    <div>

      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Estimated Diameter (feet)</th>
            <th>Date of Closest Approach</th>
            <th>Distance (miles)</th>
            <th>Velocity (miles/hour)</th>
            <th> Is Potentionally Hazardous</th>
          </tr>
        </thead>
        <tbody>
          <tr key={asteroids.reference_id}>
            <td>{asteroids.name}</td>
            <td>{asteroids.diameter_in_feet.toLocaleString('en')}</td>
            <td>{asteroids.date}</td>
            <td>{asteroids.distance.toLocaleString('en')}<ProgressBar className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{width: asteroids.distance/500000 }}/></td>
            <td>{asteroids.velocity.toLocaleString('en')}</td>
            <td> {asteroids.is_potentionally_hazardous_asteroid}</td>
          </tr>


        </tbody>
      </Table>
    </div>
  )
}
}
export default Asteroids;