import React, { Component, Fragment } from "react";
import { Route, Routes} from "react-router-dom";
import Home from "./components/routes/Home";
import Asteroid from "./components/shared/Asteroid"

class App extends Component{
  constructor () {
    super() 
    this.state = {
     asteroid: []
    }
  }
  render () { 
    return (
    <div>
      { /* Route components are rendered if the path prop matches the current URL */}
      <Fragment>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path='/asteroids'  render={() => (
            <Asteroid asteroid={this.asteroid} /> )} />
      </Routes>
      </Fragment>
    </div>
  );
}
}
export default App;