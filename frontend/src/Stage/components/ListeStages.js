import React from 'react';
import StageItem from "./StageItem";

import {Link} from "react-router-dom";

const ListeStages = props => {
    if(props.items.length === 0) {
        return (
            <div>
                <h2>Aucun stage trouvé</h2>
                <Link to="/ajouterStage">Ajouter un stage</Link>
            </div>
        );
    }

    return (
        <p>
            <ul className=''>
                {props.items.map(stage => (
                    <StageItem 
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

export default ListeStages;