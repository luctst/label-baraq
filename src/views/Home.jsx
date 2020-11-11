import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/images/bleu.png";
import ClemImage from "../assets/images/Clem.png";
import BaseHeader from "../components/BaseHeader";

const Home = () => {
  const pres = React.useRef(null);
  document.body.style = "";
  const scrollToPresentation = () => {
    document.querySelector(".presentation").scrollIntoView({
      behavior: "smooth",
      block: 'center',
      inline: 'nearest'
    });
  };

  React.useEffect(function () {
    window.addEventListener('scroll', function t() {
      if (pres && pres.current) {
        if (window.scrollY >= window.innerHeight - pres.current.offsetTop) {
          if (pres.current.style) {
            pres.current.removeAttribute('style');
          }
  
          pres.current.childNodes.forEach(function (item, index) {
            if (item.classList.contains('slide-in-bottom')) return;
            
            if (index === 0) {
              return item.classList.add('slide-in-bottom');
            } 
  
            item.classList.add('slide-in-bottom', 'text-focus-in');
            window.removeEventListener('scroll', t);
          });
        }
      }
    });
  }, []);

  return (
    <>
      <BaseHeader />
      <main className="home">
        <section className="hero">
          <img src={HeroImage} alt="Projet Bleu" />
          <span
            className="hero__scroll-arrow"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <svg
              width="26"
              height="20"
              viewBox="0 0 26 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={scrollToPresentation}
              // className="animate-bounce"
            >
              <path
                d="M13.8322 18.7507C13.4365 19.3448 12.5635 19.3448 12.1678 18.7507L1.04513 2.05442C0.602406 1.38984 1.07883 0.5 1.87737 0.5L24.1226 0.5C24.9212 0.5 25.3976 1.38984 24.9549 2.05442L13.8322 18.7507Z"
                fill="#A11842"
              />
            </svg>
          </span>
        </section>
        <section className="presentation" ref={pres} style={{visibility: 'hidden'}}>
          <div className="presentation__img">
            <span>#A11842</span>
            <img src={ClemImage} alt="Clem" />
          </div>
          <div className="presentation__content">
            <p className="subtitle uppercase text-center">Label Baraque</p>
            <h2 className="h2 text-center">Clémentine</h2>
            <ul className="presentation__content__values">
              <li>
                <h3 className="h3 text-center">Couleurs</h3>
                <p className="small-text text-center">vivantes</p>
              </li>
              <li>
                <h3 className="h3 text-center">Clients</h3>
                <p className="small-text text-center">au coeur du projet</p>
              </li>
              <li>
                <h3 className="h3 text-center">100%</h3>
                <p className="small-text text-center">de bonne humeur</p>
              </li>
            </ul>
            <p className="paragraph">
              La décoration est pour moi une histoire de famille. En effet, ma mère était architecte d’intérieur, j’ai donc réalisé mon premier projet à l’âge de 9 ans : rénovation complète de ma chambre,  de la peinture au choix du mobilier. C’était plutôt réussi !
            </p>
            <p className="paragraph">
              Après un Bachelor en commerce international et de nombreux voyages, j’ai décidé de me lancer dans la décoration d’intérieur afin d’allier entreprenariat et créativité.
            </p>
            <p className="paragraph">
              J’aime tout particulièrement l’idée de faire équipe avec mes clients, de les intégrer un maximum au projet et d’avoir avec eux une communication fluide. A travers mon travail, je cherche à les initier à la couleur qui est un élément indispensable au bien-être x dans un intérieur.
            </p>
            <p className="paragraph">
                N’hésitez pas à me contacter pour définir ensemble votre projet !
            </p>
            <div className="presentation__content__button text-center">
              <Link to="/projets" className="button">
                Découvre mes projets !
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
