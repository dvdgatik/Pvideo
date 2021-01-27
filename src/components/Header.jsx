import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
	<header className="header">

  <Link to='/'> {/*Sirve para encerrar al elemento que quisiera hacer click como ruta usanso anchor*/}
    <img className="header__img" alt="Platzi Video" src={logo} />
 
  </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img  src={userIcon} alt=""  />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><Link to="/login">Iniciar Sesion</Link></li>
      </ul>
    </div>
  </header>
	);



export default Header;
