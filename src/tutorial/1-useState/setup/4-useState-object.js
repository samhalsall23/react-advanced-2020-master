import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  // another option if you do not want to change at the object level, here you setup one by one
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    // for if you changing at the object level and do not need lines 11-13
    // setPerson({ ...person, message: "hello world" }); // ..person shows to leave the two values in the array the same,
    //                                                    only change the message
    setMessage("hello");
  };

  return (
    // if doing at object level you need to do person.name, person.age...
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
