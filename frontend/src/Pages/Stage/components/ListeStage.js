import React from "react";
import "./ListeStage.css";

function ListeStage({ infoStage }) {
  return (
    <div className="liste-stage-container">
      <ul>
        {infoStage.map((stage) => (
          <li key={stage.id} className="stage-info">
            <Stage
              nom={stage.nom}
              courriel={stage.courriel}
              entreprise={stage.nomEntreprise}
              adresse={stage.adresse}
              typeStage={stage.typeStage}
              nombrePoste={stage.nombrePoste}
              description={stage.description}
              remuneration={stage.renumeration}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Stage({
  nom,
  courriel,
  entreprise,
  adresse,
  typeStage,
  nombrePoste,
  description,
  remuneration,
}) {
  return (
    <div>
      <h4 className="nom">{nom}</h4>
      <p className="courriel">{courriel}</p>
      <p className="entreprise">{entreprise}</p>
      <p className="adresse">{adresse}</p>
      <p className="type-stage">{typeStage}</p>
      <p className="nombre-poste">{nombrePoste}</p>
      <p className="description">{description}</p>
      <p className="remuneration">{remuneration}</p>
    </div>
  );
}

export default ListeStage;