import React, { Component } from 'react'
import { Redirect} from 'react-router-dom'
import { earthObjectShow } from '../../api/EarthObject'
import  UserForm  from '../shared/UserInput.js'
//import Asteroids from '../shared/Asteroid' 
//import { withRouter } from 'react-router'
//import { Redirect } from 'react-router-dom'

class Home extends Component {
    constructor () {
        super()
    
        this.state = {
          earthObjects: {
              startDate: '',
              endDate: '',
              asteroids : []
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
                    name: asteroid.name,
                    date: asteroid.close_approach_data[0].close_approach_date,
                    diameter_in_feet: parseInt(asteroid.estimated_diameter.feet.estimated_diameter_min.toFixed(0) + asteroid.estimated_diameter.feet.estimated_diameter_max.toFixed(0) / 2 ),
                    distance: parseInt(asteroid.close_approach_data[0].miss_distance.miles),
                    velocity: parseInt(asteroid.close_approach_data[0].relative_velocity.miles_per_hour),
                    hazardous: asteroid.is_potentially_hazardous_asteroid
                  })
                })
              })
              //console.log(newAsteroids)
              this.setState({asteroids: newAsteroids})
            //  console.log(res.data.near_earth_objects)
            //  this.setState({earthObjects: res.data.near_earth_objects})
          })
          .then (<Redirect to="/asteroids"/>)
          .catch (err => {
              console.log(err)
          })
      }
      render () {
          const { earthObjects } = this.state
        earthObjects.asteroids = this.state.asteroids
          console.log(earthObjects);
          let earthObjectJsx 
          
          if(earthObjects.asteroid === undefined){
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
          // (
        //     <div>
        //   <p> Number of new earth object: {earthObjects.asteroid.length} </p>
        //     <br/>
        //     <Asteroids
        //     asteroid = {earthObjects.asteroids}
        //      />

        //     { <table className="table table-striped" style= {{ marginTop: 20 }}>
        //       <thead>
        //         <tr>
        //           <th> Name</th>
        //           <th> Hazardous </th>
        //           <th> Date </th>
        //         </tr>
        //       </thead>
        //       <tbody>
        //        {earthObjects.asteroids.map((item, i) => {
        //            return [
        //            <tr>
        //             <td>
        //           </td>
        //           <td>{item.name}</td>
        //           <td>{item.hazardous}</td>
        //           <td>{item.date}</td>
        //         </tr>,
        //            ]
        //         })}
  
        //       </tbody>
        //     </table> }
        //   </div>

         // );
          return (
            <div className="container">
            {earthObjectJsx}
            </div>
          )
      }
    // return (
    //     <div>
    //     <h1> Welcome to your New Earth Object Finder </h1>

    //     </div>
    //   )
    // }
}

export default (Home)
