import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header__container">
      <h1>PROYECTO</h1>
      <div className="search">
        <input type='text' className="input"/>
        <button className="input">Buscar</button>
      </div>
    </div>
  );
};

export default Header;
