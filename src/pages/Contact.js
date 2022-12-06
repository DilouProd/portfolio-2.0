import React from "react";
import Navigation from "../components/Navigation/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Conctactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Villeneuve-Saint-Georges</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="06 79 56 63 14">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  06 79 56 63 14
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="moreira.dylan@hotmail.fr">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Email copié !");
                  }}
                >
                  moreira.dylan@hotmail.fr
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/dylan-moreira-1a1b3b1b3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Linkedin</h4>
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/DilouProd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4>Github</h4>
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
