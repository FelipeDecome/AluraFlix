import React from 'react';
import { Link } from 'react-router-dom';
import { FooterBase } from './styles';
import logo from '../../assets/images/logo.png';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img src={logo} alt="Logo CornFlix" />
      </Link>
      <p>
        Projeto desenvolvido durante a{' '}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
