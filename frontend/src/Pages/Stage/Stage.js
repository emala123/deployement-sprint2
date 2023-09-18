import React, { useState, useEffect } from "react";
import ListeStage from "./components/ListeStage";
import NouveauStage from "./components/NouveauStage";
import { useHttpClient } from "../../shared/hooks/http-hook";

function Stage({ adresseMethode }) {
  const {error, sendRequest, clearError } = useHttpClient();
  const [stage, setStage] = useState();

  useEffect(()=>{
    const recupererStage=async()=>{
      try{
        const reponseData= await sendRequest("http://localhost:5000/stages");

        setStage(reponseData.stages);
      }catch(err){

      }
    };
  recupererStage();
},[sendRequest]);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <NouveauStage adresseMethode={adresseMethode} />
      {stage && <ListeStage infoStage={stage}/>}
    </div>
  );
}

export default Stage;

/* 
      /<ListeStage infoStage={listeStage} />
*/ 
