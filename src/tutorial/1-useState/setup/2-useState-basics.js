import React, { useState } from "react";

const UseStateBasics = () => {
  // NOTE - in order to use hooks the component needs to be upper case (stateBasics will not work)
  // NOTE - can not call conditionally

  // use state returns an array
  // console.log(useState("hello world")); // returns hello world first in array and function second
  // const value = useState(1)[0]; // we can pass in a number to first item in array
  // const handler = useState(1)[1]; // looking for second item in the array
  // console.log(value, handler);

  const [text, setText] = useState("random title"); // We do not have to put React.useState as in line 1 we imported useState
  const handleClick = () => {
    if (text === "random title") setText("new title");
    else setText("random title");
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
