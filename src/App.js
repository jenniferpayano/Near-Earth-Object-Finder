import React from "react";
import {
  Routes,
 Route
} from "react-router-dom";
import Home from "./components/routes/Home";

export default function App() {
  return (
    <Routes>

      <Route exact path='/' element={<Home/>}/>
    
      </Routes>
  
  );
}
