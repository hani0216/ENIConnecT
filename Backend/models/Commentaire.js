// models/commentaire.js
const mongoose = require('mongoose');

const commentaireSchema = new mongoose.Schema({
  contenu: { type: String, required: true },
  auteur: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Référence à l'utilisateur
  publication: { type: mongoose.Schema.Types.ObjectId, ref: 'publication', required: true }, // Référence à la publication
  dateCommentaire: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Commentaire', commentaireSchema);
