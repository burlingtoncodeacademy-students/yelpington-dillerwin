import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Map from "./components/Map";

function App() {
  const [center, setCenter] = useState([44.4797018, -73.2240624]);
  return (
    <div>
      <h1>Yelpington</h1>
      <Map center={center} />
    </div>
  );
}

export default App;
