const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const stageSchema = new Schema({
    nom: {type: String, required:true},
    courriel: {type: String, required:true},
    telephone: {type: String, required:true},
    adresse: {type: String, required:true},
    description: {type: String, required:true},
    remuneration: {type: Number, required:true},
})

module.exports = mongoose.model("Stage", stageSchema);