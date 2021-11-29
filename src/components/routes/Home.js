import React, { Component } from 'react'
import { earthObjectShow } from '../../api/EarthObject'
import UserForm from '../shared/UserInput.js'
class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.Number}</td>
                <td>{this.props.Id}</td>
                <td>{this.props.Name}</td>
                <td>{this.props.Date}</td>
                <td>{this.props.Diameter}</td>
                <td>{this.props.Hazardous}</td>
                <td>{this.props.Velocity}</td>
            </tr>)
    }
};

class Table extends Component {
    constructor(props) {
        super();
    }
    render() {
        // let headings = Object.keys(this.props.data[0]);
        return (
            <div>
                <table className="table">
                    <thead>
                            <tr>
                            <th>Number</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Diameter</th>
                            <th>Hazardous</th>
                            <th>Velocity</th>
                            </tr>
                        </thead>
                    <tbody>
                        {this.props.data.map(function (d, i) {
                            return <TableRow key={'-' + i}
                                Number={d.Number}
                                Id={d.Id}
                                Name={d.Name}
                                Date= {d.Date}
                                Diameter= {d.Diameter}
                                Distance = {d.Distance}
                                Hazardous = {d.Hazardous}
                                Velocity = {d.Velocity}
                            />
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

class Home extends Component {
    constructor() {
        super()

        this.state = {
            earthObjects: {
                startDate: '',
                endDate: '',
                asteroids: [
                ]
            }
        }
    }
    handleChange = (event) => {
        // create an object with the key/value of the field I'm typing in
        const updatedField = {
            [event.target.name]: event.target.value
        }
        const editedObject = Object.assign(this.state.earthObjects, updatedField)
        this.setState({ earthObjects: editedObject })
    }

    onSubmit = async (event) => {
        event.preventDefault()

        earthObjectShow(this.state.earthObjects)
            .then(res => {
                let neoFeedData = res.data.near_earth_objects
                let newAsteroids = []
                Object.keys(neoFeedData).forEach((date) => {
                    neoFeedData[date].forEach((asteroid) => {
                        newAsteroids.push({
                            Number: newAsteroids.length + 1,
                            Id: asteroid.id,
                            Name: asteroid.name,
                            Date: asteroid.close_approach_data[0].close_approach_date,
                            Diameter: parseInt(asteroid.estimated_diameter.feet.estimated_diameter_min.toFixed(0) + asteroid.estimated_diameter.feet.estimated_diameter_max.toFixed(0) / 2),
                            Distance: parseInt(asteroid.close_approach_data[0].miss_distance.miles),
                            Hazardous: asteroid.is_potentially_hazardous_asteroid.toString(),
                            Velocity: parseInt(asteroid.close_approach_data[0].relative_velocity.miles_per_hour)
                        })
                    })
                })
                this.setState({ asteroids: newAsteroids })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { earthObjects } = this.state
        earthObjects.asteroids = this.state.asteroids
        let earthObjectJsx
        // if asteroid list is not empty, set state to true
        if (earthObjects.asteroids !== undefined) {
            earthObjectJsx = (
                <div>
                    <h1> New Earth Object </h1>
                    <UserForm
                        earthObjects={earthObjects}
                        handleSubmit={this.onSubmit}
                        handleChange={this.handleChange}
                    />
                    <h3>Total Number of objects: {earthObjects.asteroids.length} </h3>
                    <Table data={earthObjects.asteroids} />
                </div>
            )
        }
        else {
            earthObjectJsx = (
                <div>
                    <br />
                    <h1> New Earth Object </h1>
                    <UserForm
                        earthObjects={earthObjects}
                        handleSubmit={this.onSubmit}
                        handleChange={this.handleChange}
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