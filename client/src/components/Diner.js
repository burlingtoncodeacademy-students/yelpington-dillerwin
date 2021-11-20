import React, { useEffect } from "react";
import { useState, useEFfect } from "react";

function Diner(props) {
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
  const [dinerNotes, setDinerNotes] = useState("");

  useEffect(() => {
    //fetches specific page based on id params
    fetch(`/api/${props.diner}`)
      .then((res) => res.json())
      .then((dinerContent) => {
        //sets the diner page with info from correct json
        setDiner(dinerContent);
        props.setzoom(18);
        props.setcenter(dinerContent.coordinates);
        setDinerNotes(dinerContent.notes.map((item) => <li>{item}</li>));

        //sets zoom and center on map to diner's coords
      });
  }, [props.diner]);

  if (props.diner === "home") {
    return null;
  } else {
    return (
      <div id="dinerContent">
        <h1>{diner.name}</h1>
        <h2>{`${diner.address}, ${diner.town}, ${diner.state}, ${diner.zip}`}</h2>
        <h2>Phone: {diner.number}</h2>
        <h2>Hours: {diner.hours}</h2>
        <h2>
          Notes:
          <ul>{dinerNotes}</ul>
        </h2>
      </div>
    );
  }
}

export default Diner;
