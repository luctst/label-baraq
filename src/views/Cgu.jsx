import React from "react";
import BaseHeader from "../components/BaseHeader";

const Cgu = () => {
  document.title = "Label Baraque | CGU";
  document.body.style = "";

  return (
    <>
      <BaseHeader />
      <main className="cgu container">
        <p className="text-bold mb--10">Informations générales</p>
        <p className="paragraph  mb--30">Rapin Clémentine</p>
        <p>2 passage du chantier 75012 Paris</p>
        <p className="paragraph  mb--30">0660543051</p>
        <p>Email labelbaraque@gmail.com</p>
        <p className="paragraph ">N° SIRET : 849 745 443 00010</p>
        <p>Hébergeur du site : Vercel</p>
        <p className="paragraph  mb--100">
          Caractères des informations personnelles collectées
        </p>
        <p className="text-bold mt--50">Mentions légales</p>
        <p className="paragraph">
          La loi 78-87 du 6 janvier 1978, la loi 2004-801 du 6 août 2004 ainsi que
          l'article L. 226-13 du Code Pénal et la directive Européenne du 24 Octobre 1995
          protègent l'ensemble des données personnelles.
        </p>
        <p className="paragraph">
          Au cours de la navigation sur le Site, et dans le cadre d'inscription à des
          accès spécifiques du Site, les données personnelles suivantes sont enregistrées
          :
        </p>
        <ul className="mb--16">
          <li>- Nom et Prénom</li>
          <li>- Adresse électronique</li>
        </ul>
        <p>
          L'utilisateur est informé de la possibilité de demander au webmaster du site à
          l'adresse suivante :
        </p>
        <p>labelbaraque@gmail.com</p>
        <ul>
          <li>
            - la vérification des données personnelles ayant fait l'objet d'une saisie
            pour son compte
          </li>
          <li>- les informations ayant trait aux finalités de traitement des données</li>
          <li>
            - Les informations ayant trait à l'identité et au secteur géographique des
            possesseurs de ces données
          </li>
          <li>
            - la communication d'une copie de ces données à ce titre gratuit dans la
            mesure ou celle-ci n'est pas abusive dans son caractère répétitif ou
            disproportionné
          </li>
        </ul>
        <p className="mb--30">
          Aucune information personnelle n'est collectée ni publiée ou cédée à titre
          gratuit ou onéreux à l'insu de l'utilisateur.
        </p>
        <p className="mb--30">
          Clementine Rapin est autorisé à effectuer des analyses statistiques sur
          l'utilisation et la typologie des utilisateurs sous réserve de préserver
          l'anonymat de ces derniers.
        </p>
        <p className="text-bold">Droit de modification des informations collectées</p>
        <p className="paragraph">
          Selon les dispositions de l'article 34 de la loi 44-87 du 6 janvier 1978,
          l'utilisateur dispose d'un droit de modification des données collectées le
          concernant. Dans ce but, il devra envoyer un courrier postale à l’adresse de ME.{" "}
          <br />
          En précisant ses coordonnées personnelles et les références de son compte sous
          lequel sont enregistrées ses données à caractère personnelles. Les modifications
          demandées interviendront dans un délai de quatre à six semaines.
        </p>
      </main>
    </>
  );
};

export default Cgu;
