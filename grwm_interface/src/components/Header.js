import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";

const Header = () => {
  const [header, setHeader] = useState(() => {
    const initialState = localStorage.getItem("header");
    return initialState ? JSON.parse(initialState) : false;
  });

  useEffect(() => {
    localStorage.setItem("header", JSON.stringify(header));
  }, [header]);

  const handleHeader = () => {
    setHeader(!header);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
      <h1 className="text-3xl font-bold text-[#d892b6]">GRWM.</h1>

      <ul className="hidden md:flex flex-grow font-bold text-[#d892b6]">
        <li className="p-4">
          <Link to="/">HOME</Link>
        </li>

        <li className="p-4">
          <Link to="/About">ABOUT</Link>
        </li>

        <li className="p-4">
          <Link to="/SignIn">SIGN IN</Link>
        </li>

        <li className="p-4">
          <Link to="/SignUp">SIGN UP</Link>
        </li>
      </ul>

      <div onClick={handleHeader} className='block md:hidden'>
        {!header ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>

      <div className={!header ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-gray-300 ease-in-out duration-500" : 'fixed left-[-100%]'}>
      <h1 className="text-3xl font-bold text-[#d892b6] m-4">GRWM.</h1>
        <ul className='uppercase p-4'>
          <li className="p-4 border-b border-gray-300">
            <Link to="/Home">Home</Link>
          </li>

          <li className="p-4 border-b border-gray-300">
            <Link to="/About">About</Link>
          </li>

          <li className="p-4 border-b border-gray-300">
            <Link to="/SignIn">Sign In</Link>
          </li>

          <li className="p-4">
            <Link to="/SignUp">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
