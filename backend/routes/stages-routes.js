const express = require("express");

const controleursStages = require("../controllers/stages-controlleurs")
const router = express.Router();

router.get("/", controleursStages.getToutLesStages);

router.get("/:employeurId", controleursStages.getStagesEmployeur);

router.post("/ajouterStage/:employeurId", controleursStages.ajouterEmployeurStage);

module.exports = router;