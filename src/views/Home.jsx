import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/images/bleu.png";
import ClemImage from "../assets/images/Clem.png";

const Home = () => {
  const scrollToPresentation = () => {
    document.querySelector(".presentation").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="home">
      <section className="hero">
        <img src={HeroImage} alt="Projet Bleu" />
        <span className="hero__scroll-arrow">
          <svg
            width="26"
            height="20"
            viewBox="0 0 26 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={scrollToPresentation}
          >
            <path
              d="M13.8322 18.7507C13.4365 19.3448 12.5635 19.3448 12.1678 18.7507L1.04513 2.05442C0.602406 1.38984 1.07883 0.5 1.87737 0.5L24.1226 0.5C24.9212 0.5 25.3976 1.38984 24.9549 2.05442L13.8322 18.7507Z"
              fill="#A11842"
            />
          </svg>
        </span>
      </section>
      <section className="presentation">
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
              <p className="small-text text-center">Vivantes</p>
            </li>
            <li>
              <h3 className="h3 text-center">Clients</h3>
              <p className="small-text text-center">Aux coeur du projet</p>
            </li>
            <li>
              <h3 className="h3 text-center">100%</h3>
              <p className="small-text text-center">De bonnes humeur</p>
            </li>
          </ul>
          <p className="paragraph">
            La décoration est pour moi une histoire de famille. En effet, ma mère était
            architecte d’intérieur, j’ai donc toujours baigné dans cet environnement. J’ai
            moi-même développé l’intime conviction que nous avons besoin d’un intérieur
            accueillant et chaleureux pour se sentir bien. Après un Bachelor en commerce
            international et de nombreux voyages, j’ai donc décidé de me lancer dans la
            décoration d’intérieur afin d’allier entreprenariat et créativité.
          </p>
          <p className="paragraph">
            Le métier de décoratrice me permet d’imaginer des lieux ergonomiques en mixant
            matières & couleurs afin de rendre l’espace vivant.
          </p>
          <p className="paragraph">
            J’aime tout particulièrement l’idée de faire équipe avec mes clients, de les
            intégrer un maximum au projet et de mettre en place une communication fluide.
            A travers mon travail, je cherche à les initier à la couleur qui est un
            élément indispensable au bien-être dans un intérieur.
          </p>
          <div className="presentation__content__button text-center">
            <Link to="/projets" className="button">
              Découvre mes projets !
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
