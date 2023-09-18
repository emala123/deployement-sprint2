import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import NouveauEtudiant from "./components/NouveauEtudiant";

function Etudiant({ adresseMethode}) {
  const { sendRequest } = useHttpClient();
  const [etudiant, setEtudiant] = useState();
  let etudiants;

  useEffect(()=>{
    const recupererEtudiant=async()=>{
      try{
        const reponseData= await sendRequest("http://localhost:5000/etudiants");
        
        setEtudiant(reponseData.etudiants);
        
        
      }catch(err){

      }
    };
    recupererEtudiant();
},[sendRequest]);


  return (
    <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <NouveauEtudiant adresseMethode={adresseMethode} />
  </div>
  );
}

export default Etudiant;
