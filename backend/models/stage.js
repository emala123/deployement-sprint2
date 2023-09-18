const mongoose = require ('mongoose');
const { stringify } = require('uuid');

const Schema = mongoose.Schema;

const stageSchema = new Schema({
    nom: {type: String, required:true},
    courriel: {type: String, required:true, unique:true},
    telephone: {type: String, required:true, unique:true},
    adresse: {type: String, required:true, unique:true},
    description: {type: String, required:true},
    remuneration: {type: String, required:true}
})

module.exports = mongoose.model("Stage", stageSchema);