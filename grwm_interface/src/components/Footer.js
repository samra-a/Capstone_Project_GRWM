import {
  FaTwitterSquare,
  FaInstagram,
  FaFacebookSquare,
  FaPinterestSquare,
} from "react-icons/fa";
import { BsCreditCard, BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div className="socials">
        <h1 className="w-full text-3xl font-bold text-[#d892b6]">GRWM.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex justify-between md:w-[75%] my-6">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaFacebookSquare size={30}/>{" "}
          </a>
          <a
            href="https://twitter.com/?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaTwitterSquare size={30}/>{" "}
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaInstagram size={30}/>{" "}
          </a>
        </div>

        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-gray-400">Information</h6>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Commercial</li>
              <li className="py-2 text-sm">Insights</li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">API Status</li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Press</li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
              <li className="py-2 text-sm">Conditions</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="font-medium text-gray-400 justify-end lg:col-start-3 lg:text-right lg:self-end">
        <p>&copy; 2023 GRWM. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
