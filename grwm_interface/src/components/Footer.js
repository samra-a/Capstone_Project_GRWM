import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsCreditCard, BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
        <div className="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
            <li><a href="#">order status</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>subscriptions</h4>
          <ul>
            <li><a href="#">subscribe</a></li>
            <li><a href="#">account</a></li>
            <li><a href="#">upgrade plan</a></li>
            <li><a href="#">shop</a></li>
          </ul>
        </div>
      </div>
      </div>

      <div className="footer-col">
      <div className="social-links">
        <h4>follow us</h4>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FaFacebookF />{" "}
        </a>
        <a
          href="https://twitter.com/?lang=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FaTwitter />{" "}
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <FaInstagram />{" "}
        </a>
      </div>
      </div>

      <div className="copyright">
        <p>&copy; 2023 GRWM. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
