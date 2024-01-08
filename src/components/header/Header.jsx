import React, { useState } from "react";
import "./header.css";
import logo from "./Me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = () => {
    const emailElement = document.getElementById("email");
    const range = document.createRange();
    range.selectNode(emailElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    setIsCopied(true);

    // Reset the "Copied!" message after a short delay
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section className="container" id="home">
      <div className="content-header">
        <img className="img-header" src={logo} alt="personal photo" />
        <div className="home-title">
          <h1>Roberto Gauna</h1>
          <h4>Software Engineer</h4>
          <div className="email-container"> 
            <h5>
              <em id="email">rgauna@gmail.com</em>
              <button onClick={handleCopyToClipboard} className="btn-copy">
                <FontAwesomeIcon icon={faCopy} />
              </button>
            </h5>
            <div className={`copied-message ${isCopied ? "show" : ""}`}>
              <p>Email copied!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
