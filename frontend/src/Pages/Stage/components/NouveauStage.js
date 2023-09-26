import "./NouveauStage.css";
import React, { useState } from "react";
import { useHttpClient } from "../../../shared/hooks/http-hook";

function NouveauStage({ adresseMethode }) {
  const [saisieNomEntreprise, setSaisieNomEntreprise] = useState("");
  const [saisieCourriel, setSaisieCourriel] = useState("");
  const [saisieNum, setSaisieNum] = useState("");
  const [saisieAdresseEntreprise, setSaisieAdresseEntreprise] = useState("");
  const [saisieDescriptionStage, setSaisieDesriptionStage] = useState("");
  const [saisieRemuneration, setSaisieRemuneration] = useState("");
  const { sendRequest } = useHttpClient();

  const ajouterNouveauStage = async (event) => {
    console.log("test");
    event.preventDefault();

    try {
      const reponseData = await sendRequest(
        "http://localhost:5000/stages/ajouterUnStage",
        "POST",
        JSON.stringify({
          nom: saisieNomEntreprise,
          courriel: saisieCourriel,
          telephone: saisieNum,
          adresse: saisieAdresseEntreprise,
          description: saisieDescriptionStage,
          remuneration: saisieRemuneration,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      console.log(reponseData);
    } catch (err) {
      console.log(err);
    }

    if (saisieNomEntreprise === "") {
      alert("Veuillez entrer un nom");
      return;
    } else if (saisieCourriel === "") {
      alert("Veuillez entrer un courriel");
      return;
    } else if (saisieNum === "") {
      alert("Veuillez entrer un numero de telephone");
      return;
    } else if (saisieAdresseEntreprise === "") {
      alert("Veuillez entrer l'adresse de l'entreprise");
      return;
    }  else if (saisieDescriptionStage === "") {
      alert("Veuillez faire une description du stage");
      return;
    } else if (saisieRemuneration === "") {
      alert("Veuillez saisir une renumeration");
      return;
    } else {
      window.location.reload();
      const nouveauStage = {
        nomEntreprise: saisieNomEntreprise ,
        courriel: saisieCourriel,
        numero: saisieNum,
        adresse: saisieAdresseEntreprise,
        description: saisieDescriptionStage,
        remuneration: saisieRemuneration,
      };
      adresseMethode(nouveauStage)
        .then(() => {
          // The stage addition was successful, display a confirmation message
          alert("Le stage a été ajouté avec succès");
          setSaisieNomEntreprise("");
          setSaisieCourriel("");
          setSaisieNum("");
          setSaisieAdresseEntreprise("");
          setSaisieDesriptionStage("");
          setSaisieRemuneration("");
        })
        .catch(() => {
          // The stage addition failed, display an error message
          alert(
            "Une erreur est survenue lors de l'ajout du stage. Veuillez contacter le superviseur des stages."
          );
        });
    }
  };

  function saisieNomEntrepriseHandler(event) {
    setSaisieNomEntreprise(event.target.value);
  }
  function saisieCourrielHandler(event) {
    setSaisieCourriel(event.target.value);
  }
  function saisieNumHandler(event) {
    setSaisieNum(event.target.value);
  }
  function saisieAdresseEntrepriseHandler(event) {
    setSaisieAdresseEntreprise(event.target.value);
  }
  function saisieDescriptionStageHandler(event) {
    setSaisieDesriptionStage(event.target.value);
  }
  function saisieRenumerationHandler(event) {
    setSaisieRemuneration(event.target.value);
  }

  return (
    <form className="nouveau-stage-form" onSubmit={ajouterNouveauStage}>
      <label for="nom">Nom de l'entreprise: </label>
      <input
        type="text"
        value={saisieNomEntreprise}
        onChange={saisieNomEntrepriseHandler}
        placeholder="Nom de l'entreprise"
      />
      <br></br>
      <label for="courriel"> Courriel de la personne contact: </label>
      <input
        type="text"
        value={saisieCourriel}
        onChange={saisieCourrielHandler}
        placeholder="Courriel de la personne"
      />
      <br></br>
      <label for="numTelephone">
        {" "}
        Numéro de téléphone de la personne contact:{" "}
      </label>
      <input
        type="text"
        value={saisieNum}
        onChange={saisieNumHandler}
        placeholder="Numero de la personne"
      />
      <br></br>
      <label for="adresseEntreprise"> Adresse de l'entreprise: </label>
      <input
        type="text"
        value={saisieAdresseEntreprise}
        onChange={saisieAdresseEntrepriseHandler}
        placeholder="Adresse de l'entreprise"
      />
      <br></br>
      <label for="descriptionStage">Description du stage: </label>
      <input
        type="text"
        value={saisieDescriptionStage}
        onChange={saisieDescriptionStageHandler}
        placeholder="Description du stage"
      />
      <br></br>
      <label for="renumeration">Rémunération :</label>
      <input
        type="text"
        value={saisieRemuneration}
        onChange={saisieRenumerationHandler}
        placeholder="Rémunération"
      />
        
      <br></br>
      <button type="sumbit"> Ajouter un stage</button>
    </form>
  );
}

export default NouveauStage;
