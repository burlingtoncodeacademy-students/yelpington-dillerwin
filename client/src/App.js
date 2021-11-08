import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Map from "./components/Map";

function App() {
  const [center, setCenter] = useState([44.0, -72.699997]);
  return (
    <div>
      <h1 className="title">Yelpington</h1>
      <div className="dinerList"></div>
      <div className="mapContainer">
        <Map center={center} />
      </div>
    </div>
  );
}

export default App;
