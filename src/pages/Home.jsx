import React from "react";
import Navbar from "../components/Header/NavBar/Navbar";

import "../components/Header/NavBar/css/Navbar.css";
import Crews from "../components/Main/Crews/Crews";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Crews />
    </>
  );
};

export default HomePage;
