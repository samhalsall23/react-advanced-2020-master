import React, { useState } from "react";

const UseStateCounter = () => {
  const counterTotal = 0;
  const [counter, setCounter] = useState(counterTotal);

  // BASIC COUNTER ---------------------------------------------
  // decrease counter
  const decreaseCounter = (counterP) => {
    counterP--;
    setCounter(counterP);
  };
  // reset counter
  const resetCounter = (counter) => {
    counter = 0;
    setCounter(counter);
  };
  // increase counter
  const increaseCounter = (counter) => {
    counter++;
    setCounter(counter);
  };

  // ADVANCED DELAYED COUNTER ---------------------------------------------
  const increaseComplexCounter = () => {
    setTimeout(() => {
      // setCounter(counter + 1); // this does not work as we click multiple times within <2sec and only updates once
      setCounter((prevState) => {
        // this makes us get the current counter
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <div>
      <section>
        <h2>{counter}</h2>
        <button className="btn" onClick={() => decreaseCounter(counter)}>
          Decrease
        </button>
        {/* other option, is to do as the function setCounter(cou nter-1) */}
        <button className="btn" onClick={() => resetCounter(counter)}>
          Reset
        </button>
        <button className="btn" onClick={() => increaseCounter(counter)}>
          Increase
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>{counter}</h2>
        <button className="btn" onClick={() => increaseComplexCounter()}>
          Increase Later
        </button>
      </section>
    </div>
  );
};

export default UseStateCounter;
