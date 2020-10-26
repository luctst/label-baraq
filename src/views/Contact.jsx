import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClemImage from "../assets/images/Clem-2.png";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Contact = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputNeed, setInputNeed] = useState("coaching");
  const [inputDescription, setInputDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [submitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputName || !inputEmail || !inputNeed) {
      setError("Le formulaire est incomplet.");
      return;
    }
    setError(false);
    setLoading(true);
    const form = {
      name: inputName,
      email: inputEmail,
      need: inputNeed,
      description: inputDescription,
    };
    console.log(form);
    /* Launch request to API */
    /* If request succeded => setSubmitSuccess(true) then setLoading(false) */
    /* If an error occured => setError(true) then setLoading(false) */
  };

  const renderSuccessSection = () => {
    return (
      <section className="contact__success text-center">
        <h2 className="h2 text-center mb--10">Merci pour ta demande !</h2>
        <h2 className="h2 text-center mb--100">Je te recontacte dès que possible.</h2>
        <div>
          <Link to="projets" className="button">
            Revenir aux projets
          </Link>
        </div>
      </section>
    );
  };

  const renderFormSection = () => {
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="name" className="h2">
              Nom / Prénom
            </label>
            <input
              type="text"
              name="name"
              required
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="email" className="h2">
              Mail
            </label>
            <input
              type="email"
              name="email"
              required
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="need" className="h2">
              De quoi as-tu besoin ?
            </label>
            <select
              name="need"
              required
              value={inputNeed}
              onChange={(e) => setInputNeed(e.target.value)}
            >
              <option value="coaching">
                Coaching déco : conseils sur une mission précise
              </option>
              <option value="beforeProject">
                Avant-projet : Etude et création du projet avant les travaux
              </option>
              <option value="completeProject">
                Projet complet : avant-projet + suivi de chantier
              </option>
              <option value="other">Autre</option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="description" className="h2">
              Décris brievement ton projet / ta demande
            </label>
            <textarea
              name="description"
              value={inputDescription}
              onChange={(e) => setInputDescription(e.target.value)}
              rows="6"
            />
          </div>
          {error && <Error>{error === true ? "Une erreur est survenue." : error}</Error>}
          <button type="submit" onClick={handleSubmit}>
            Envoyer
          </button>
        </form>
      </section>
    );
  };

  const renderSection = () => {
    if (loading) return <Loader />;
    if (submitSuccess) return renderSuccessSection();
    return renderFormSection();
  };

  return (
    <main className="contact container">
      <section className="text-center">
        <img src={ClemImage} alt="Clémentine" className="hide--tablet mb--30" />
        <h2 className="h2 text-center mb--30">À distance ou à domicile ?</h2>
        <p className="paragraph">
          Je suis basée sur Paris, mais si ce n’est pas le cas de ton projet, pas de
          panique ! La distance n’est pas un frein à mon activité, tant que les trains et
          les visioconférences fonctionnent !
        </p>
      </section>
      {renderSection()}
    </main>
  );
};

export default Contact;
