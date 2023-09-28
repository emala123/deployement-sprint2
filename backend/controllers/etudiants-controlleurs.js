const HttpErreur = require("../models/http-erreur");
const { v4: uuidv4 } = require("uuid");

const Etudiant = require("../models/etudiant");
const { default: mongoose } = require("mongoose");

const inscription = async (requete, reponse, next) => {
    
    const { prenom, nom, courriel, adresse, motDePasse, telephone} = requete.body;

    let etudiantExiste;`
    `
    try {
        etudiantExiste = await Etudiant.findOne({ courriel: courriel });
      } catch {
        return next(new HttpErreur("Échec vérification étudiant existe", 500));
      }

      if (etudiantExiste) {
        return next(
          new HttpErreur("Étudiant existe déjà, veuillez vos connecter", 422)
        );
    }

    let nouvelEtudiant = new Etudiant({
        prenom,
        nom,
        courriel,
        adresse,
        motDePasse,
        telephone
      });

      try{
        await nouvelEtudiant.save();
      } catch (err) {
        console.log(err);
        return next(new HttpErreur("Erreur lors de l'ajout de l'étudiant", 422));
      }
      reponse
    .status(201)
    .json({ etudiant: nouvelEtudiant.toObject({ getters: true }) });
}

const connexion = async (requete, reponse, next) => {
    const { courriel, motDePasse } = requete.body;

    let etudiantExiste;

    try {
        etudiantExiste = await Etudiant.findOne({ courriel: courriel });
      } catch {
        return next(new HttpErreur("Échec vérification etudiant existe", 500));
      }

      if (!etudiantExiste || etudiantExiste.motDePasse !== motDePasse) {
        return next(new HttpErreur("Courriel ou mot de passe incorrect", 401));
      }

      reponse.json({
        message: "connexion réussie!",
        etudiant: etudiantExiste.toObject({ getters: true }),
      });
}

const updateEtudiant = async (requete, reponse, next) => {
    const { prenom, nom, adresse, telephone} = requete.body;
    const etudiantId = requete.params.etudiantId;

    let etudiant;

    try {
        etudiant = await Etudiant.findById(etudiantId);
        etudiant.prenom = prenom;
        etudiant.nom = nom;
        etudiant.adresse = adresse;
        etudiant.telephone = telephone;
        await etudiant.save();
      } catch {
        return next(
          new HttpErreur("Erreur lors de la mise à jour d'un étudiant", 500)
        );
      }

      reponse.status(200).json({ etudiant: etudiant.toObject({ getters: true }) });
}

exports.inscription = inscription;
exports.connexion = connexion;
exports.updateEtudiant = updateEtudiant;