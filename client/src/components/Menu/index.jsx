import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/images/logo.png";
import "./index.css";

import Button from "./../Button";

import Navbar from "./components/Navbar";
import LogoWrapper from "./components/LogoWrapper";

const Menu = () => {
  return (
    <Navbar className="Menu">
      <Link to="/">
        <LogoWrapper className="Logo" src={Logo} alt="CornFlix Logo" />
      </Link>
      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo Vídeo
      </Button>
    </Navbar>
  );
};

export default Menu;
