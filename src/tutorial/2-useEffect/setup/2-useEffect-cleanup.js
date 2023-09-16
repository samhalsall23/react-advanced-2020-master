import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log("resizedd event listener");
    return () => {
      // will be invoked once we exit, where we clean up.
      // Without this every time we resize we re-render and create another event listener
      // this will cause too many event listeners therefore each re-render we delete the last
      window.removeEventListener("resize", checkSize);
      console.log("cleanup");
      // another solution however may be adding [] dependency BUT will not work in more advanced cases
    };
  });

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  return (
    <>
      <h1>Size</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
