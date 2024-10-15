import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="social-media">
        {/* <h3>My Social Media</h3> */}
        <ul className="social-media-links">
          <li className="social-media-a-links">
            <FontAwesomeIcon icon={faGithub} />
            <a href="https://github.com/rgauna79" target="_blank">
              Github
            </a>
          </li>
          <li className="social-media-a-links">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:rgauna@gmail.com" target="_blank">
              Gmail
            </a>
          </li>
          <li className="social-media-a-links">
            <FontAwesomeIcon icon={faLinkedin} />
            <a href="https://linkedin.com/in/rgauna" target="_blank">
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
