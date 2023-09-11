const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const stageSchema = new Schema({
    nom: {type: String, required:true},
    courriel: {type: String, required:true, unique:true},
    telephone: {type: String, required:true, unique:true},
    typeStage: {type: String, required:true},
    adresse: {type: String, required:true, unique:true},
    description: {type: String, required:true},
    typeRemuneration: {type: String, required:true},
    remuneration: {type: String, required:true}
})

module.exports = mongoose.model("Stage", stageSchema);