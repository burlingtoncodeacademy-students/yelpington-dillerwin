import React, { useState, useEffect } from "react";

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
        setDinerNotes(
          dinerContent.notes.map((item) => <li key={item}>{item}</li>)
        );

        //sets zoom and center on map to diner's coords
      });
    //props.diner is needed here, no array creates recursion and empty array results in no output at all ¯\_(ツ)_/¯
  }, [props.diner]);

  if (props.diner === "home") {
    props.setzoom(8);
    return null;
  } else {
    return (
      <div id="dinerContent">
        <h3>{diner.name}</h3>
        <h4>{`${diner.address}, ${diner.town}, ${diner.state}, ${diner.zip}`}</h4>
        <h4>Phone: {diner.number}</h4>
        <h4>Hours: {diner.hours}</h4>
        <h4>
          Notes:
          <ul>{dinerNotes}</ul>
        </h4>
      </div>
    );
  }
}

export default Diner;
