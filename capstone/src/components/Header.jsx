import { React, useState } from 'react';
import { Link } from "react-router-dom"
import '../styles/Header.css';
import logo from '../images/Logo.svg'


export default function Header(){
  const [isActive, setActive] = useState("home");

  return(
    <header className='header'>
    <Link to="/"><img src={logo} alt="little lemon"/></Link>
    <nav>
        <ul>
            <li><Link to="/" className={`${isActive === "home" ? 'nav-item nav-item-active' : 'nav-item'}`} onClick={() => setActive("home")}>Home</Link></li>
            <li><Link to="/wip" className={`${isActive === "about" ? 'nav-item nav-item-active' : 'nav-item'}`} onClick={() => setActive("about")}>About</Link></li>
            <li><Link to="/wip" className={`${isActive === "menu" ? 'nav-item nav-item-active' : 'nav-item'}`} onClick={() => setActive("menu")}>Menu</Link></li>
            <li><Link to="/bookings" className={`${isActive === "booking" ? 'nav-item nav-item-active' : 'nav-item'}`} onClick={() => setActive("booking")}>Reservations</Link></li>
            <li><Link to="/wip" className={`${isActive === "online" ? 'nav-item nav-item-active' : 'nav-item'}`} onClick={() => setActive("online")}>Order Online</Link></li>
            <li><Link to="/wip" className={`${isActive === "login" ? 'nav-item nav-item-active' : 'nav-item'}`} onClick={() => setActive("login")}>Login</Link></li>
        </ul>
    </nav>
  </header>)
}