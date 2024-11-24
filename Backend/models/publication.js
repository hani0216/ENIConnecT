// models/publication.js
const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  contenu: { type: String, required: true },
  auteur: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: function() {
      return !this.estAnonyme; // Le champ auteur est requis si estAnonyme est false
    }
  },
  estAnonyme: { type: Boolean, default: false }, // Détermine si la publication est anonyme
  datePublication: { type: Date, default: Date.now },
});

// Modifier la logique pour ne pas exiger l'auteur si la publication est anonyme
publicationSchema.path('auteur').required(function() {
  return !this.estAnonyme && this.auteur !== null;
});

module.exports = mongoose.model('Publication', publicationSchema);