import Body from "../pictures/bodyinclusive.jpeg";
import Hero1 from "../pictures/hero1.jpg"
import Quote from "../pictures/quote.png"
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate()
  
  return (
    <>
      <div className="HeroSection">


        <div className="picture1">
          <img src={Body} alt="" className="heroImg" />
        </div>

        <div className="hero2">
          <img src={Hero1} alt="" className="heroImg" />

          <div>
            <button className="card_button" onClick={() => { navigate("/formOne")}}>Take the Quiz!</button>
          </div>

        </div>


        <div className="quote3">

          <img src={Quote} alt="" className="heroImg" />

        </div>
      </div>
    </>
  );
};


export default Hero;

