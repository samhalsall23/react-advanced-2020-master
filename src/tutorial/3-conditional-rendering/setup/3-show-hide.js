import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* change the button to opposite of what it is on click */}
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>

      {show && <Item></Item>}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize); // cleanup function, without this we will be running this everytime we show the component (click button)
    };
  }, []);
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>size : {size}</h2>
    </div>
  );
};

export default ShowHide;
