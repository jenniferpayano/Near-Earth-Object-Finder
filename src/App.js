import React, { Fragment } from "react";
import { Link, Route, Routes} from "react-router-dom";
import Home from "./components/routes/Home";

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      { /* Route components are rendered if the path prop matches the current URL */}
      <Fragment>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      </Routes>
      </Fragment>
    </div>
  );
}