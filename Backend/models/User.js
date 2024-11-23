const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
  nomUtilisateur: { type: String, required: true, unique: true },  // username
  email: { type: String, required: true, unique: true },
  motDePasse: { type: String, required: true },  // password
  dateCreation: { type: Date, default: Date.now },  // createdAt
  role: { type: String, enum: ['étudiant', 'enseignant', 'admin'], default: 'étudiant' },  // role
  
  // Champs spécifiques aux étudiants
  filiere: { type: String, required: function() { return this.role === 'étudiant'; } },  // filière
  classe: { type: String, required: function() { return this.role === 'étudiant'; } },   // classe
  option: { type: String, required: function() { return this.role === 'étudiant'; } }    // option
});

module.exports = mongoose.model('Utilisateur', utilisateurSchema);
