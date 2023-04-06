import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import Aya from "../pictures/team/Aya.png"
import Diana from "../pictures/team/Diana.png"
import Samra from "../pictures/team/Samra.png"
import Chinika from "../pictures/team/Chinika.png"

const MeetTeam = () => {
  return (
    <section className="meet">
      <div className="container">
        <div className="section-title">
          <h2 className="title">Meet the Team</h2>
          <p className="message">
            These are the faces behind the website and behind the amazing
            styling.
          </p>
        </div>

        <div className="cards">
          <div className="card">
            <img src={Aya} alt="team" />
            <h3 className="name">Aya Hezam</h3>
            <p className="job">CEO</p>
            <p className="email">
              aya@bnta.com
            </p>
            <p className="quote">"Self-care is giving the world the best of you, instead of what's left of you."</p>

            <ul className="icons">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaFacebookF />{" "}
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitter />{" "}
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaInstagram />{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="card">
            <img src={Diana} alt="team" />
            <h3 className="name">Diana Eboh</h3>
            <p className="job">CEO</p>
            <p className="email">
              diana@bnta.com
            </p>
            <p className="quote">"Caring for myself is not self-indulgence, it is self-preservation, and that is an act of political warfare."</p>

            <ul className="icons">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaFacebookF />{" "}
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitter />{" "}
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaInstagram />{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="card">
            <img src={Samra} alt="team" />
            <h3 className="name">Samra Afzaal</h3>
            <p className="job">CEO</p>
            <p className="email">
              samra@bnta.com
            </p>
            <p className="quote">"Self-care is not a luxury. It's an investment in your most important asset - yourself."</p>

            <ul className="icons">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaFacebookF />{" "}
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitter />{" "}
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaInstagram />{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="card">
            <img src={Chinika} alt="team" />
            <h3 className="name">Chinika Charles</h3>
            <p className="job">CEO</p>
            <p className="email">
              chinika@bnta.com
            </p>
            <p className="quote">"You can't pour from an empty cup. Take care of yourself first." </p>

            <ul className="icons">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaFacebookF />{" "}
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaTwitter />{" "}
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaInstagram />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;
