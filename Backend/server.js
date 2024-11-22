const express = require('express');  // Importation d'Express
require('dotenv').config({ path: './config/.env' });
const connectDB = require('./config/db.js');

// Connexion à la base de données
connectDB();

const app = express();               // Création de l'application Express

// Route de base
app.get('/', (req, res) => {
  res.send('Serveur Node.js sans dotenv fonctionne !');
});

// Démarrage du serveur
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});