import React, { Component } from 'react'
import { earthObjectShow } from '../../api/EarthObject'
import  UserForm  from '../shared/UserInput.js'


class Home extends Component {
    constructor () {
        super()
    
        this.state = {
          earthObjects: {
              startDate: '',
              endDate: '',
              asteroids : [
              ],
              anyasteroids: false
          }
        }
      }
      handleChange = (event) => {
        // create an object with the key/value of the field I'm typing in
        const updatedField = {
          [event.target.name]: event.target.value
        }
        const editedObject= Object.assign(this.state.earthObjects, updatedField)
        this.setState({ earthObjects: editedObject })
        //console.log(this.earthObjects)
    }
      
      onSubmit = async(event) => { 
          
        event.preventDefault()
    
          earthObjectShow(this.state.earthObjects)
          .then(res => {
              console.log(res.data.near_earth_objects)
              let neoFeedData = res.data.near_earth_objects
              let newAsteroids = []
              Object.keys(neoFeedData).forEach((date)=>{
                neoFeedData[date].forEach((asteroid) =>{
                  newAsteroids.push({
                    Name: asteroid.name,
                    Date: asteroid.close_approach_data[0].close_approach_date,
                    Diameter: parseInt(asteroid.estimated_diameter.feet.estimated_diameter_min.toFixed(0) + asteroid.estimated_diameter.feet.estimated_diameter_max.toFixed(0) / 2 ),
                    Distance: parseInt(asteroid.close_approach_data[0].miss_distance.miles),
                    Hazardous: asteroid.is_potentially_hazardous_asteroid.toString(),
                    Velocity: parseInt(asteroid.close_approach_data[0].relative_velocity.miles_per_hour),
                    

                  })
                })
              })
              //console.log(newAsteroids)
              this.setState({asteroids: newAsteroids})
        
          })
          .catch (err => {
              console.log(err)
          })
      }
      
      render () {
          const { earthObjects } = this.state
        earthObjects.asteroids = this.state.asteroids
          console.log(earthObjects);
          let earthObjectJsx 
          if(earthObjects.asteroids !== undefined){
              earthObjects.anyasteroids = true;
          }
if(earthObjects.anyasteroids) {
    const TableComponent = ({
    data
  }) => {
    let headings = Object.keys(data[1]);
    return (
      <table className='table table-bordered'>
        <thead>
          <tr>
            {
              headings.map(heading => <th>{heading}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
              data.map(item => 
                <tr>
                 {
                    headings.map(heading => <td>{item[heading]}</td>) 
                 }
                </tr>
              )
          }
        </tbody>
      </table>
    );
  }
earthObjectJsx = (
    <div>
          <h1> New Earth Object </h1>
            <UserForm
            earthObjects = {earthObjects}
            handleSubmit = {this.onSubmit}
            handleChange= {this.handleChange}
            />
        <TableComponent data={earthObjects.asteroids}/>
    </div>
)
}
else {
          earthObjectJsx = (
            <div>
            <br/>
            <h1> New Earth Object </h1>
            <UserForm
            earthObjects = {earthObjects}
            handleSubmit = {this.onSubmit}
            handleChange= {this.handleChange}
            />
          </div>
          
          );
}
   
          return (
            <div className="container">
            {earthObjectJsx}
            </div>
          )
      }
}
export default (Home)