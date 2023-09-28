import React from 'react';

import {Link} from "react-router-dom";

import StageUserItem from './StageUserItem';

const ListeStagesUser = props => {
    if (props.items.length === 0) {
        return (
            <div>
                <h2>Cet utilisateur n'a pas de stage, créé un stage!</h2>
                <Link to="/ajouterStage">Ajouter un stage</Link>
            </div>
        );
    }

    return (
        <p>
        <ul className='Liste-Stages'>
            {props.items.map(stage => (
                <StageUserItem 
                    key={stage.id}
                    id={stage.id}
                    nom={stage.nom}
                    courriel={stage.courriel}
                    telephone={stage.telephone}
                    adresse={stage.adresse}
                    description={stage.description}
                    remuneration={stage.remuneration}
                />
            ))}
        </ul>
        </p>
    );
};

export default ListeStagesUser;