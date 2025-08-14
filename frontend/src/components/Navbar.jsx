import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => (
  <nav>
    <Link to="/">Login</Link>
    <Link to="/register">Register</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/raise-ticket">Raise Ticket</Link>
    <Link to="/tickets">Tickets</Link>
  </nav>
);

export default Navbar;
