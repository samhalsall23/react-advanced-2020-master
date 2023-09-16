import React, { useState, useEffect } from "react";
// useEffect by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect"); // everytime we click the button it logs, that is because the useState triggers a re-render
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  }, [value]); // second parameter is array of dependencies, if we put an empty array it means useEffect only runs on initial render
  // if we pass in value it only runs when value is changed

  // can have as many use effects as you want
  useEffect(() => {
    console.log("this only runs on initial render"); // because of empty array
  }, []);

  console.log("render");

  return (
    <>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
