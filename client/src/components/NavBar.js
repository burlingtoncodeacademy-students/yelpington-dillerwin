import React from "react";
import { useState, useEffect } from "react";

function NavBar(props) {
  const [diners, setDiners] = useState(``);

  //handles diner name in Nav bar being clicked, redirects to individual page
  function handleClick(event) {
    event.preventDefault();
    let targetId = event.target.id;
    console.log(targetId);
    window.location = `/diners/${targetId}`;
  }

  //collects diner names into list and places them into the Nav bar as links
  useEffect(() => {
    if (diners.length === 0)
      fetch(`/api/diners`)
        .then((res) => res.json())
        .then((dinerList) => {
          setDiners(
            dinerList.map((file) => (
              <li onClick={handleClick} className="dinerList" id={file.id}>
                {file.name}
              </li>
            ))
          );
        });
  });

  return (
    <div className="diners">
      <ul>{diners}</ul>
    </div>
  );
}

export default NavBar;
