import React from 'react';
import { Link } from "react-router-dom"
import '../styles/Footer.css';
import logo from '../images/footer.png'

const Footer = () => (
  <footer>
    <img src={logo} alt="Little lemon footer logo" />
    <div className="footer-content">
            <div>
                <p className="footer-heading">Doormat Navigtion</p>
                <Link to="/" className="footer-item">Home</Link>
                <Link to="/wip" className="footer-item">About</Link>
                <Link to="/wip" className="footer-item">Menu</Link>
                <Link to="/bookings" className="footer-item">Reservations</Link>
                <Link to="/wip" className="footer-item">Order Online</Link>
                <Link to="/wip" className="footer-item">Login</Link>
            </div>
            <div>
                <p className="footer-heading">Contact</p>
                <Link href="#" className="footer-item">Address</Link>
                <Link href="#" className="footer-item">Phone Number</Link>
                <Link href="#" className="footer-item">Email</Link>
            </div>
            <div>
                <p className="footer-heading">Social Media</p>
                <Link href="#" className="footer-item">Facebook</Link>
                <Link href="#" className="footer-item">Instagram</Link>
                <Link href="#" className="footer-item">TikTok</Link>
                <Link href="#" className="footer-item">Twitter</Link>
            </div>
        </div>
  </footer>
);

export default Footer;