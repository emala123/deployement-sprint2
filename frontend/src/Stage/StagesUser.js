import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import ListeStagesUser from './components/ListeStagesUser';
import { useHttpClient } from '../shared/hooks/http-hook';
import { AuthContext } from '../shared/context/auth-context';

const StagesListeUser = () => {
    const [StagesLoad, setStagesLoad] = useState();
    const auth = useContext(AuthContext);
    const { error, sendRequest, clearError } = useHttpClient();

    useEffect(() => {
        if(error){
          alert(error);
          clearError();
        }
      }, [error, clearError]);

      useEffect(() => {
        const stages = async () => {
            try{    
                const reponseData = await sendRequest(
                  process.env.REACT_APP_BACKEND_URL+`/stages/${auth.userId}`
                );
                setStagesLoad(reponseData.stages)
            }catch (erreur) {
                console.log(erreur);
            }
        };
        stages();
      }, [sendRequest, auth.userId]);

      return(
        <React.Fragment>
            <h1>Bienvenue dans votre liste de stages que vous avez créé!</h1>
            {StagesLoad && <ListeStagesUser items={StagesLoad} />}
        </React.Fragment>
      );
};

export default StagesListeUser;