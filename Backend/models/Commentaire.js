const mongoose = require("mongoose");

const commentaireSchema = new mongoose.Schema({
  contenu: String,
  date: { type: Date, default: Date.now },
  auteur: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  idPub: { type: mongoose.Schema.Types.ObjectId, ref: "publication" },
  estAnonyme: Boolean,
});

module.exports = mongoose.model("Commentaire", commentaireSchema);
