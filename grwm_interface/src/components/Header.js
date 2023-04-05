import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="header-image">
        <img src="https://i.imgur.com/wDcVWj6.jpg" alt="logo image" height="60" />
      </div>

      <div className="header-links-container">
        <div className={`header-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Sign In">Account</Link>
          <Link to="/Sign Up">Sign Up</Link>
        </div>

        <div className="header-burger-menu" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </div>
  );
};

export default Header;

