import React from "react";
import logoOnePiece from "./img/One-Piece-Logo.png";

const Navbar = () => {
  return (
    <>
      <header id="cabeçalho">
        <img id="logo" src={logoOnePiece} />
        <nav id="navbar">
          <ul id="list-navbar">
            <li>
              <a href="#">Home Page</a>
            </li>
            <li>
              <a href="#">The Straw Hat</a>
            </li>
            <li>
              <a href="#">Pirates White Beards</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
