import React from "react";
import { useState } from "react";
import Map from "./components/Map";
import "./components/App.css";
import Diner from "./components/Diner";

import NavBar from "./components/NavBar";

function App() {
  //sets map center point
  const [center, setCenter] = useState([44.0, -72.699997]);
  //sets which diner is clicked, defaults to "home", which is "none"
  const [diner, setDiner] = useState("home");
  //sets zoom level, defaults to state level
  const [zoom, setZoom] = useState(8);

  return (
    <div>
      <img
        // image of Henry's diner, may come back and have it trade out images of each diner
        className="headerImage"
        src="https://www.henrysdinervt.com/GalleryImages/116340/lg_b42840_DSC_3029.jpg"
        alt="Henry's Diner"
      />
      <h1 className="title">Yelpington</h1>
      <div id="wrapper">
        <div id="infoWrapper">
          {/* navigation bar for getting to each diner page. Can also click on map pop-ups */}
          <NavBar setdiner={setDiner} />
          <div className="dinerWrapper">
            {/* div for displaying info for specific diner. Defaults to not appear */}
            <Diner diner={diner} setzoom={setZoom} setcenter={setCenter} />
          </div>
        </div>
        <div className="mapContainer">
          {/* the map! */}
          <Map center={center} zoom={zoom} setdiner={setDiner} />
        </div>
      </div>
    </div>
  );
}

export default App;
