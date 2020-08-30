import React from "react";
import {Link} from "react-router-dom";

function Navbar()
{
  return(
    <nav>
      
    <div className="nav-wrapper grey">
      <Link to="/" className="brand-logo">JaN</Link>
      <ul className="left">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/help">Help</Link></li>
      </ul>

      <ul className="right">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </div>
    </nav>
  )

}

export default Navbar;