import { Link } from "react-router-dom";
import Body from "../pictures/bodyinclusive.jpeg";
import Hero1 from "../pictures/hero1.jpg"
import Quote from "../pictures/quote.png"
const Hero = () => {
    return (
        <>
         {/* <h1 className="title">GRWM</h1> */}
       
      <div className="HeroSection">
       

        <div className="picture1">
            <img src={Body} alt="" className="heroImg" />
         
        </div>

        <div className="hero2">
            <img src={Hero1} alt="" className="heroImg"/>

            <div>
            <button className="card_button">Take the Quiz!</button>
          </div>
    
        </div>
        
  
        <div className="quote3">
         
            <img src={Quote} alt="" className="heroImg"/>
          
        </div>
      </div>
      </>
    );
  };
  

export default Hero;

