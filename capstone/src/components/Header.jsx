import React from 'react';
import '../styles/Header.css';
import logo from '../images/Logo.svg'

const Header = () => (
  <header>
    <img src={logo} alt="Little Lemon logo"/>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Reservation</a></li>
            <li><a href="/">Order Online</a></li>
            <li><a href="/">Login</a></li>
        </ul>
    </nav>
  </header>
);

export default Header;