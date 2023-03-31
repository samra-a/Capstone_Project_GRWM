import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsCreditCard, BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socials">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        > <FaFacebookF /> </a>
        <a
          href="https://twitter.com/?lang=en"
          target="_blank"
          rel="noopener noreferrer"
        > <FaTwitter /> </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        > <FaInstagram /> </a>
      </div>

      <div className="copyright">
        <p>&copy; 2023 GRWM. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
