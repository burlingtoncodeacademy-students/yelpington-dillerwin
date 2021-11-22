import React from "react";
import { useState } from "react";
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
      <img
        className="headerImage"
        src="https://www.henrysdinervt.com/GalleryImages/116340/lg_b42840_DSC_3029.jpg"
        alt="Henry's Diner"
      />
      <h1 className="title">Yelpington</h1>
      <div id="wrapper">
        <div id="infoWrapper">
          <NavBar setdiner={setDiner} />
          <div className="dinerWrapper">
            <Diner diner={diner} setzoom={setZoom} setcenter={setCenter} />
          </div>
        </div>
        <div className="mapContainer">
          <Map center={center} zoom={zoom} setdiner={setDiner} />
        </div>
      </div>
    </div>
  );
}

export default App;
