import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

// second argument

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users); // doing this could be a problem as after every re-render we would be logging users (to solve we add [] in useEffect)
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>GitHub Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url}></img>
              <div>
                <h4>{login}</h4>
                <p>{html_url}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
