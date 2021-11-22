import React from "react";
import { useState, useEffect } from "react";

function NavBar(props) {
  //variable to store and display diner list
  const [diners, setDiners] = useState(``);

  //handles diner name in Nav bar being clicked, redirects to individual page
  function handleClick(event) {
    //prevents default click behavior
    event.preventDefault();
    //sets diner id
    let targetId = event.target.id;
    //sends id to App.js in state
    props.setdiner(targetId);
  }

  //collects diner names into list and places them into the Nav bar as links
  useEffect(() => {
    //if diner list doesn't exist, creates it
    if (diners.length === 0)
      //fetches diner api
      fetch(`/api/diners`)
        .then((res) => res.json())
        .then((dinerList) => {
          //coverts it into a .json
          setDiners(
            dinerList
              //removes home.json from diner list
              .filter((item) => item.id !== "home")
              //creates list items of each diner name, gives each list item an id, key, and onClick, then the new list is added to diners state, which is called in return
              .map((file) => (
                <li
                  key={file.id}
                  onClick={handleClick}
                  className="dinerList"
                  id={file.id}
                >
                  {file.name}
                </li>
              ))
          );
        });
  });

  return (
    <div className="diners">
      <ul onClick={handleClick}>
        <li className="dinerList" id="home">
          Home
        </li>
        {/* display list stored in diners state */}
        {diners}
      </ul>
    </div>
  );
}

export default NavBar;
