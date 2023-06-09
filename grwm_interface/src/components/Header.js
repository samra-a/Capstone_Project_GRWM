import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()

  return (
    <div className="header">
      <div className="header-image">
        <img src="https://i.imgur.com/wDcVWj6.jpg" alt="logo image" height="60" onClick={() => { navigate("/")}}/>
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