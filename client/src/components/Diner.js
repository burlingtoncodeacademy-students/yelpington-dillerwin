import React, { useEffect } from "react";
import { useState, useEFfect } from "react";

function Diner(props) {
  console.log(`inside Diner.js`);
  //sets up diner bones for page use
  const [diner, setDiner] = useState({
    id: "",
    name: "",
    address: "",
    town: "",
    state: "",
    number: "",
    zip: "",
    coordinates: [],
    hours: "",
    notes: [],
  });

  useEffect(() => {
    //fetches specific page based on id params
    fetch(`/api/${props.params.id}`)
      .then((res) => res.json())
      .then((dinerContent) => {
        //sets the diner page with info from correct json
        setDiner(dinerContent);
        console.log(props);
        //sets zoom and center on map to diner's coords
        props.setzoom({
          zoomIn: true,
          zoom: 18,
          center: diner.coordinates,
        });
      });
  });

  return (
    <div id="dinerContent">
      <h1>{diner.name}</h1>
      <h2>{(diner.address, diner.town, diner.state, diner.zip)}</h2>
      <h2>Phone: {diner.number}</h2>
      <h2>Hours: {diner.hours}</h2>
      <h2>Notes: {diner.notes}</h2>
    </div>
  );
}

export default Diner;
