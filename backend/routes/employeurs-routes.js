const express = require("express");

const controleursEmployeurs = require("../controllers/employeurs-controlleurs")
const router = express.Router();


router.post('/inscription', controleursEmployeurs.inscriptionEmployeur);

router.post('/connexion', controleursEmployeurs.connexionEmployeur);

router.patch("/modifier/:employeurId", controleursEmployeurs.updateEmployeur);

router.post("/ajouterStage", controleursEmployeurs.ajouterEmployer);

module.exports = router;