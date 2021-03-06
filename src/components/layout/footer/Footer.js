import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import { FormattedMessage } from "react-intl";

/**
 * Component to show the footer of the web application with some information about the development team
 */
export const Footer = () => {
  return (
    <div data-testid="footer" id="footer">
      <div className="footerElement">
        <b data-testid="footer-dev"><FormattedMessage id="DevTeam"/> </b> Viade_en1b{" "}
      </div>
      <div className="footerElement">
        <a
          data-testid="footer-github"
          href="https://github.com/Arquisoft/viade_en1b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon id="githubIcon" icon={faGithub} />
        </a>
      </div>
      <div className="footerElement">
        <a
          data-testid="footer-react"
          href="https://lamasumas.github.io/Solid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon id="githubIcon" icon={faBook} />
        </a>
      </div>
      <div className="footerElement">
        <a
          data-testid="footer-react"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon id="githubIcon" icon={faReact} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
