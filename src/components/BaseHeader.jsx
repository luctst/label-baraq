import React from "react";
import { createPortal } from "react-dom";
import { withRouter } from "react-router-dom";
import SCheader from "../styles/SC/Header";
import { Link } from "react-router-dom";
import SCheaderModel from "../styles/SC/HeaderModal";
import burgerSVG from "../assets/images/menu.svg";
import labelBaraqLogo from "../assets/images/LABEL-BARAQUE.png";
import cancel from "../assets/images/cancel.svg";

const BaseHeader = (props) => {
  const [navOpen, setNavOpen] = React.useState(false);

  if (navOpen) {
    return createPortal(
      <SCheaderModel className="container">
        <header>
          <div>
            <img src={cancel} alt="close menu" onClick={() => setNavOpen(!navOpen)} />
          </div>
          <div>
            <img src={labelBaraqLogo} alt="Label baraq logo" />
          </div>
        </header>
        <main>
          <ul>
            <li>
              <Link to="/projets" />
              REALISATIONS
            </li>
            <li>CONTACT</li>
          </ul>
        </main>
      </SCheaderModel>,
      document.body
    );
  }

  return (
    <SCheader>
      <nav className="nav--mobile container">
        <div>
          <img src={burgerSVG} alt="menu burger" onClick={() => setNavOpen(!navOpen)} />
        </div>
        <div>
          <img src={labelBaraqLogo} alt="Logo label baraq" />
        </div>
      </nav>
      <nav className="nav--desktop container">
        {props.location.pathname === "/" ? (
          <p>
            <Link to="/projets">
              Les réalisations
              <span></span>
            </Link>
          </p>
        ) : (
          <div onClick={props.history.goBack}>
            <svg viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.8322 18.7507C13.4365 19.3448 12.5635 19.3448 12.1678 18.7507L1.04513 2.05442C0.602406 1.38984 1.07883 0.5 1.87737 0.5L24.1226 0.5C24.9212 0.5 25.3976 1.38984 24.9549 2.05442L13.8322 18.7507Z"
                fill="#A11842"
              />
            </svg>
          </div>
        )}
        <div>
          <img src={labelBaraqLogo} alt="label baraq logo" />
        </div>
        <p>
          <Link to="/contact">
            contact
            <span></span>
          </Link>
        </p>
      </nav>
    </SCheader>
  );
};

export default withRouter(BaseHeader);
