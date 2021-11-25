import React, { Fragment } from "react";
import { Route, Routes} from "react-router-dom";
import Home from "./components/routes/Home";

export default function App() {
  return (
    <div>
      { /* Route components are rendered if the path prop matches the current URL */}
      <Fragment>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      </Routes>
      </Fragment>
    </div>
  );
}