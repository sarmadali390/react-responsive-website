import { useState } from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [navLinkOpen,navLinkToggle]= useState(false)
    const handdleNavLinksToggle = () => {
        navLinkToggle(!navLinkOpen)
    }
    const randerClasses = () => {
        let classes = "navlinks";
        if(navLinkOpen){
            classes+=" active"
        }
        return classes
    }
  return (
    <nav>
      <div className="logo">
        <i className="fas fa-mountain"></i>
        <h4>Mountains</h4>
      </div>
        <ul className={randerClasses()} onClick={handdleNavLinksToggle}>
            <li className="link"><Link to="/">Home</Link></li>
            <li className="link"><Link to="/about">About</Link></li>
            <li className="link"><Link to="/">Services</Link></li>
            <li className="link"><a href="#">Contact Us</a></li>
        </ul>
        <div onClick={handdleNavLinksToggle} className="hamburger-toggle">
            <i className="fas fa-bars fa-lg"></i>
        </div>
    </nav>
  );
};

export default Navbar;
