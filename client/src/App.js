import React from "react";
import { useState, useEffect } from "react";
import Map from "./components/Map";
import "./components/App.css";
import Diner from "./components/Diner";

import NavBar from "./components/NavBar";

function App() {
  const [center, setCenter] = useState([44.0, -72.699997]);
  const [diner, setDiner] = useState("home");
  const [zoom, setZoom] = useState(8);

  return (
    <div>
      <h1 className="title">Yelpington</h1>
      <div id="wrapper">
        <NavBar setdiner={setDiner} />
        <div className="mapContainer">
          <Map center={center} />
        </div>
        <div className="dinerWrapper">
          <Diner diner={diner} setzoom={setZoom} setcenter={setCenter} />
        </div>
      </div>
    </div>
  );
}

export default App;
