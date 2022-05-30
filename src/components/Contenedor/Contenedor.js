import React, { useState, useEffect } from "react";
import CardUser from "../CardUser";
import "./Contenedor.css";

const Contenedor = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((res) => setUsers(res));
  }, []);

  return (
    <div className="CardContainer">
      {users.map((user) => {
        return <CardUser className="CardUser" user={user}></CardUser>;
      })}
    </div>
  );
};

export default Contenedor;
