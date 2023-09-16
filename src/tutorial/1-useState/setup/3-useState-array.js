import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data); // use React. if you do not import it like this import React, { useState } from "react";
  //console.log(React.useState(data));
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        console.log(person);
        const { id, name } = person;
        return (
          <div key={(id, name)} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {/* arrow function needed for onClick so it only gets invoked when button is clicked no when DOM is loaded */}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
