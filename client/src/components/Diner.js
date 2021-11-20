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
        //zooms map to closer view
        props.setzoom(17);
        //centers map on diner location
        props.setcenter(dinerContent.coordinates);
        //creates list of the notes on the diners
        setDinerNotes(
          dinerContent.notes.map((item) => <li key={item}>{item}</li>)
        );
      });
    //props.diner is needed here, no array creates recursion and empty array results in no output at all ¯\_(ツ)_/¯
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.diner]);

  //hides diner info and sets zoom back to state level. home.json also has its coords set to the default center, so the map zooms back out
  if (props.diner === "home") {
    props.setzoom(8);
    return null;
  } else {
    //if not on "home", creates div with information on the diner
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
