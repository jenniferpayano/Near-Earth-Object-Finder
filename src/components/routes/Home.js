import React, { Component } from 'react'
import { earthObjectShow } from '../../api/EarthObject'
import  UserForm  from '../shared/UserInput.js' 

class Home extends Component {
    constructor () {
        super()
    
        this.state = {
          earthObjects: {
              startDate: '',
              endDate: ''
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
            //  console.log(res.data.near_earth_objects)
            //  this.setState({earthObjects: res.data.near_earth_objects})
          })
          .catch (err => {
              console.log(err)
          })
      }
      render () {
          const { earthObjects } = this.state
          let earthObjectJsx 
        //console.log(earthObjects)
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

          )
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

export default Home
