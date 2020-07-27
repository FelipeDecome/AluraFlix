import React from "react";
import Logo from "./../../assets/images/logo.png";
import "./index.css";

import Button from "./../Button";

const Menu = () => {
  return (
    <header className="Menu">
      <img className="Logo" src={Logo} alt="CornFlix Logo" />
      <Button href="/" className="ButtonLink">
        Novo Vídeo
      </Button>
    </header>
  );
};

export default Menu;
