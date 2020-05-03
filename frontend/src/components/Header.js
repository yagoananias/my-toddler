import React from 'react';
import {Link} from 'react-router-dom';

import './Header.css';

import logo from '../assets/logo.svg';
import baby from '../assets/baby.svg';


export default function Header() {
  return(
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={ logo } alt="myToddler" />
        </Link>
        <Link to="/new">
          <img src={ baby } alt="Enviar publicação" />
        </Link>
      </div>
    </header>
  );
}