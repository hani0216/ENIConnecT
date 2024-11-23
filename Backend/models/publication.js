// models/publication.js
const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  contenu: { type: String, required: true },
  auteur: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Référence à un utilisateur
  estAnonyme: { type: Boolean, default: false }, // Détermine si la publication est anonyme
  datePublication: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Publication', publicationSchema);
