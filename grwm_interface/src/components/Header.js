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
        <div className="header-links">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/UserAccount">Account</Link>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

{/* <ul>
                        <li>
                            <Link to={"/register"}>Register</Link>
                        </li>
                        <li>
                            <Link to={"/formOne"}>Quiz</Link>
                        </li>
                        <li>
                            <Link to={"/userAccount"}>Account</Link>
                        </li>
                    </ul> */}