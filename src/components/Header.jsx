import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/home">
        <div className="logo">
          <img src="../../public/K.png" alt="KK Consulting Logo" />
        </div>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
