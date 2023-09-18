import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import NouveauEmployeur from "./components/NouveauEmployeur";

function Employeur({ adresseMethode}) {
  const { sendRequest } = useHttpClient();
  const [employeur, setEmployeur] = useState();
  let employeurs;

  useEffect(()=>{
    const recupererEmployeur=async()=>{
      try{
        const reponseData= await sendRequest("http://localhost:5000/etudiants");
        
        setEmployeur(reponseData.etudiants);
        
        
      }catch(err){

      }
    };
    recupererEmployeur();
},[sendRequest]);


  return (
    <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <NouveauEmployeur adresseMethode={adresseMethode} />
  </div>
  );
}

export default Employeur;
