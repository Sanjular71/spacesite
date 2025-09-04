import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">SpaceSite</div>
      <ul className={open ? 'nav-links active' : 'nav-links'}>
        <li><Link to="/">Home</Link></li> 
        <li><a href="/features">Features</a></li>  
         <li><Link to="/contact">Contact</Link></li> 
      </ul>
      <div className={open ? 'hamburger active' : 'hamburger'} onClick={() => setOpen(!open)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
