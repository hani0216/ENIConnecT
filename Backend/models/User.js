const mongoose = require('mongoose');

<<<<<<< HEAD
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'teacher'], default: 'student' },
});

module.exports = mongoose.model('User', UserSchema);
=======
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
>>>>>>> 216b9fc512334a75bbc06387c7c81b09e719ac67
