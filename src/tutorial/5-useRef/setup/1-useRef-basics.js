import React, { useEffect, useRef } from "react";

// Like useState, useRef => preserves value
// Unlike useState, useRef => DOES NOT trigger re-render
// Popular use case => target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(refContainer.current.value) 
    // we not using e.current, using refContainer instead
    // we are not doing a onChange each time we type something diff
    console.log(divContainer.current)
    // output <div>Hello World<div/>
  }
  useEffect(()=>{
    console.log(refContainer.current) // logs on first render
    refContainer.current.focus() // highlights the text box, ready to type
  })
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer}/>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div ref={divContainer}>Hello world</div>
    </>
  );
};

export default UseRefBasics;
