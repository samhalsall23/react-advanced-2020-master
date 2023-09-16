import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  //const firstValue = text || "hello world"; // if text is false (e.g. empty), we return second value. If true returns the text we entered
  //const secondValue = text && "hello world"; // if text is true, we return the second value

  return (
    <>
      {/* <h1>1- {firstValue}</h1>
      <h1>2- {secondValue}</h1> */}
      <h1>{text || "John Doe"}</h1>
      {/* {text && <h2>text there</h2>}
      {!text && <h2>text there</h2>} */}

      {/* grabbing the opposite value of is error on btn click below */}
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}

      {/* ternary operator - If error is false we skip first part before : (colon) and go to second*/}
      {isError ? (
        <p>there is error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
