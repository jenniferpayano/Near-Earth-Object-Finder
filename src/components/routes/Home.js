import React, { Component } from 'react'
import { earthObjectShow } from '../../api/EarthObject'

class Home extends Component {
    constructor () {
        super()
    
        this.state = {
          earthObjects: null
        }
      }

      componentDidMount () {
          earthObjectShow()
          .then(res => {
              console.log(res.data.near_earth_objects)
              this.setState({earthObjects: res.data.near_earth_objects})
          })
      }
      render () {
          const { earthObjects } = this.state
          let earthObjectJsx 
        console.log(earthObjects)
          earthObjectJsx = (
            <div>
            <br/>
            <h1> LIST </h1>
            
                { earthObjects}
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
