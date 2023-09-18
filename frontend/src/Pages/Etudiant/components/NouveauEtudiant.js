import React, { useState } from "react";
import { useHttpClient } from "../../../shared/hooks/http-hook";

function NouveauEtudiant({ adressMethode }) {
  const [saisiePrenomEtudiant, setSaisiePrenomEtudiant] = useState("");
  const [saisieNomEtudiant, setSaisieNomEtudiant] = useState("");
  const [saisieCourrielEtudiant, setSaisieCourrielEtudiant] = useState("");
  const [saisieMotDePasse, setSaisieMotDePasse] = useState("");
  const [saisieAdresse, setSaisieAdresse] = useState("");
  const [saisieTelephone, setSaisieTelephone] = useState("");

  const { sendRequest } = useHttpClient();
  const ajouterEtudiant = async (event) => {
    event.preventDefault();

    try {
      const reponseData = await sendRequest(
        "http://localhost:5000/etudiants/inscription",
        "POST",
        JSON.stringify({
          prenom: saisiePrenomEtudiant,
          nom: saisieNomEtudiant,
          courriel: saisieCourrielEtudiant,
          adresse: saisieAdresse,
          motDePasse: saisieMotDePasse,
          telephone: saisieTelephone,

        }),
        {
          "Content-Type": "application/json",
        }
      );
      console.log(reponseData);
    } catch (err) {
      console.log(err);
    }

    if (saisiePrenomEtudiant === "") {
      alert(
        "Veuillez entrer le nom de l'étudiant que vous voulez ajouter"
      );
      return;
    } else if (saisieNomEtudiant === "") {
      alert("Veuillez entrer le nom de l'étudiant que vous voulez ajouter");
      return;
    } else if (saisieCourrielEtudiant === "") {
      alert("Veuillez entrer le courriel de l'étudinat que vous voulez ajouter");
      return;
    } else if (saisieMotDePasse === "") {
      alert("Veuillez entrer le courriel de l'étudinat que vous voulez ajouter");
      return;
    } else if (saisieMotDePasse >=6) {
      alert("Veuillez entrer un mot de passe avec plus de 6 caracteres");
      return;
      
    } else if (saisieAdresse === "") {
      alert("Veuillez entrer l'adresse de l'étudiant ");
      return;
    } else if (saisieTelephone === "") {
      alert("Veuillez entrer un numero de telephone ");
      return;
    } else {
      const nouveauEtudiant = {
        prenomEtudiant: saisiePrenomEtudiant,
        nomEtudiant: saisieNomEtudiant,
        courriel: saisieCourrielEtudiant,
        mdp: saisieMotDePasse,
        adresse: saisieAdresse,
        telephone: saisieTelephone,
      };
      adressMethode(nouveauEtudiant)
        .then(() => {
          alert("Un étudiant a bien été créer");
          setSaisiePrenomEtudiant("");
          setSaisieNomEtudiant("");
          setSaisieCourrielEtudiant("");
          setSaisieMotDePasse("")
          setSaisieAdresse("");
          setSaisieTelephone("");
        })
        .catch(() => {
          alert("Une erreur est survenue lors de la création de l'étudiant");
        });
    }
  };

  function saisieNumDAHandler(event) {
    setSaisiePrenomEtudiant(event.target.value);
  }

  function saisieNomEtudiantHandler(event) {
    setSaisieNomEtudiant(event.target.value);
  }

  function saisieCourrielEtudiantHandler(event) {
    setSaisieCourrielEtudiant(event.target.value);
  }

function saisieMotDePasseHandler(event) {
  setSaisieMotDePasse(event.target.value);
}

  function saisieAdresseHandler(event) {
    setSaisieAdresse(event.target.value);
  }

function saisieTelephoneHandler(event) {
  setSaisieTelephone(event.target.value);
}

  return (
    <form className="nouveau-stage-form" onSubmit={ajouterEtudiant}>
      <label for="prenomEtudiant">Prénom Étudiant: </label>
      <input
        type="text"
        value={saisiePrenomEtudiant}
        onChange={saisieNumDAHandler}
        placeholder="Penom de l'étudiant"
      />
      <br></br>
      <label for="nomEtudiant">Nom etudiant: </label>
      <input
        type="text"
        value={saisieNomEtudiant}
        onChange={saisieNomEtudiantHandler}
        placeholder="Nom de l'étudiant"
      />
      <br></br>
      <label for="adresse">Adresse: </label>
      <input
        type="text"
        value={saisieAdresse}
        onChange={saisieAdresseHandler}
        placeholder="Adresse de l'étudiant"
      />
      <br></br>
      <label for="adresse">Téléphone : </label>
      <input
        type="tel"
        value={saisieTelephone}
        onChange={saisieTelephoneHandler}
        placeholder="Telephone"
      />
      <br></br>
      <label for="courriel">Courriel: </label>
      <input
        type="text"
        value={saisieCourrielEtudiant}
        onChange={saisieCourrielEtudiantHandler}
        placeholder="Courriel de l'étudiant"
      />
      <br></br>
      <label for="motDePasse">Mot de passe: </label>
      <input
        type="password"
        value={saisieMotDePasse}
        onChange={saisieMotDePasseHandler}
        placeholder="Mot de passe de l'étudiant"
      />
      <button type="sumbit"> Créer un etudiant</button>
    </form>
  );
}

export default NouveauEtudiant;
