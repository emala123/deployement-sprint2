import React from 'react';

const StageUserItem = props => {

    return(
        <React.Fragment>
            <li>
                <div>
                    <h2>{props.nom}</h2>
                    <p>{props.description}</p>
                    <p>{props.courriel}<br/>{props.telephone}<br/>{props.adresse}<br/>{props.remuneration}</p>
                </div>
            </li>
        </React.Fragment>
    );
};

export default StageUserItem;