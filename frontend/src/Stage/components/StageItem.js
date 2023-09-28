import React from 'react';

const StageItem = props => {
    return(
        <li className=''>
            <div className=''>
                <h2>{props.nom}</h2>
                <p>{props.description}</p>
                <p>{props.courriel}<br/>{props.telephone}<br/>{props.adresse}<br/>{props.remuneration}</p>
            </div>
        </li>
    );
};

export default StageItem;