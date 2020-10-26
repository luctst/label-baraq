import React from "react";
import { createPortal } from "react-dom";
import SCheader from "../styles/SC/Header";
import { Link } from "react-router-dom";
import SCheaderModel from "../styles/SC/HeaderModal";
import burgerSVG from "../assets/images/menu.svg";
import labelBaraqLogo from "../assets/images/LABEL-BARAQUE.png";
import cancel from "../assets/images/cancel.svg";

const BaseHeader = () => {
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
        <p>
          <Link to="/projets">
            Les réalisations
            <span></span>
          </Link>
        </p>
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

export default BaseHeader;
