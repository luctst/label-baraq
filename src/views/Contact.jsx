import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClemImage from "../assets/images/Clem-3.png";
import Loader from "../components/Loader";
import Error from "../components/Error";
import BaseHeader from "../components/BaseHeader";

const Contact = () => {
  const [state, setState] = useState({
    loading: false,
    btnDisabled: true,
    submitSuccess: false,
    formError: {},
    errorApi: false,
  });

  React.useEffect(function () {
    document.body.style = "";
    const newState = { ...state };

    ["name", "mail", "need", "description"].forEach((el) => {
      const objToCreate = {
        error: false,
        messageError: "",
        accessToChange: false,
        inputValue: "",
      };

      if (el === "need") {
        return (newState.formError[el] = {
          ...objToCreate,
          inputValue: "Coaching déco : conseils sur une mission précise",
        });
      }

      return (newState.formError[el] = {
        error: false,
        messageError: "",
        accessToChange: false,
        inputValue: "",
      });
    });

    return setState(newState);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newState = { ...state };

    if (e.type === "change") {
      if (!newState.formError[e.target.name].accessToChange) return;
    }

    if (e.target.value === "") {
      if (newState.formError[e.target.name].accessToChange) {
        newState.formError[e.target.name].inputValue = "";

        return updateFormError(e.target.name, "Champ vide");
      }

      return;
    }

    if (e.target.name === "mail") {
      if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          e.target.value
        ) === false
      )
        return updateFormError(e.target.name, "Format mail incorrect");
    }

    if (!newState.formError[e.target.name].accessToChange) {
      newState.formError[e.target.name].accessToChange = true;
    }

    newState.formError[e.target.name].error = false;
    newState.formError[e.target.name].messageError = "";
    newState.formError[e.target.name].inputValue = e.target.value;

    if (Object.values(newState.formError).every((el) => el.inputValue.length !== 0)) {
      const btnEnabled = Object.values(newState.formError).every((el) => !el.error);

      if (btnEnabled) {
        newState.btnDisabled = false;
      } else {
        newState.btnDisabled = true;
      }
    }

    return setState(newState);
  };

  function updateFormError(inputName, errorMessage) {
    const newState = { ...state };

    newState.formError[inputName].error = true;
    newState.formError[inputName].messageError = errorMessage;

    if (!newState.formError[inputName].accessToChange) {
      newState.formError[inputName].accessToChange = true;
    }

    if (!newState.btnDisabled) {
      newState.btnDisabled = true;
    }

    return setState(newState);
  }

  async function formSubmit(e) {
    e.preventDefault();

    setState({
      ...state,
      loading: true,
    });
    // sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

    // try {
    //   await sgMail.send({
    //     to: 'lucas.tostee@gmail.com',
    //     from: 'lucas.tostee@gmail.com',
    //     subject: state.formError.need.inputValue,
    //     html: `
    //     <h1>${state.formError.name.inputValue} aimerais des informations :)</h1>
    //     <small>Ses informations:</small>
    //     <ul>
    //       <li>Mail - <strong>${state.formError.mail.inputValue}</strong></li>
    //       <li>Description projet - ${state.formError.description.inputValue}</li>
    //     </ul>
    //     `
    //   });

    //   setState({
    //     ...state,
    //     submitSuccess: true,
    //     loading: false
    //   })
    // } catch (error) {
    //   setState({
    //     ...state,
    //     errorApi: true,
    //     loading: false
    //   })
    // }
  }

  return (
    <>
      <BaseHeader />
      <main className="contact container">
        <section className="text-center">
          <img src={ClemImage} alt="Clémentine" className="hide--tablet mb--30" />
          <h2 className="h2 text-center mb--30">À distance ou à domicile ?</h2>
          <p className="paragraph" style={{textAlign: 'center'}}>
            Je suis basée sur Paris, mais si ce n’est pas le cas de ton projet, pas de
            panique ! La distance n’est pas un frein à mon activité, tant que les trains et
            les visioconférences fonctionnent !
          </p>
        </section>
        {(function () {
          if (state.loading) return <Loader />;

          if (state.submitSuccess) {
            return (
              <section className="contact__success text-center">
                <h2 className="h2 text-center mb--10">Merci pour ta demande !</h2>
                <h2 className="h2 text-center mb--100">
                  Je te recontacte dès que possible.
                </h2>
                <div>
                  <Link to="projets" className="button">
                    Revenir aux projets
                  </Link>
                </div>
              </section>
            );
          }

          return (
            <section>
              <form onSubmit={formSubmit}>
                <div className="input">
                  <label htmlFor="name" className="h2">
                    Nom / Prénom
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    onBlur={handleSubmit}
                    onChange={handleSubmit}
                  />
                  {state.formError.name && state.formError.name.error && (
                    <Error errorContent={state.formError.name.messageError} />
                  )}
                </div>
                <div className="input">
                  <label htmlFor="email" className="h2">
                    Mail
                  </label>
                  <input
                    type="email"
                    name="mail"
                    required
                    onBlur={handleSubmit}
                    onChange={handleSubmit}
                  />
                  {state.formError.mail && state.formError.mail.error && (
                    <Error errorContent={state.formError.mail.messageError} />
                  )}
                </div>
                <div className="input">
                  <label htmlFor="need" className="h2">
                    De quoi as-tu besoin ?
                  </label>
                  <select
                    name="need"
                    required
                    onBlur={handleSubmit}
                    onChange={handleSubmit}
                  >
                    <option value="Coaching déco : conseils sur une mission précise">
                      Coaching déco : conseils sur une mission précise
                    </option>
                    <option value="Avant-projet : Etude et création du projet avant les travaux">
                      Avant-projet : Etude et création du projet avant les travaux
                    </option>
                    <option value="Projet complet : avant-projet + suivi de chantier">
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
                    rows="6"
                    onBlur={handleSubmit}
                    onChange={handleSubmit}
                  />
                  {state.formError.description && state.formError.description.error && (
                    <Error errorContent={state.formError.description.messageError} />
                  )}
                </div>
                {state.errorApi && (
                  <Error errorContent="Une erreur est survenue, veuillez recharger la page et effectuer une autre tentative, si le problème persiste merci de réessayer ultérieurement." />
                )}
                <button
                  type="submit"
                  disabled={state.btnDisabled}
                  className={state.btnDisabled ? "button_disabled" : undefined}
                >
                  Envoyer
                </button>
              </form>
            </section>
          );
        })()}
      </main>
    </>
  );
};
export default Contact;
