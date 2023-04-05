import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-image">
        <img src="" alt="logo image" height="500" />
      </div>

      <div id="nav-left">
        <div className="header-left">
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
        </div>
      </div>

      <div id="nav-right">
        <div className="header-right">
          <Link to="/Login">Login</Link>
          <Link to="/Sign Up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
