const express = require("express");

const controleursEtudiants = require("../controllers/etudiants-controlleurs")
const router = express.Router();


router.post('/inscription', controleursEtudiants.inscriptionEtudiant);

router.post('/connexion', controleursEtudiants.connexionEtudiant);

router.patch("/modifier/:etudiantId", controleursEtudiants.updateEtudiant);

module.exports = router;