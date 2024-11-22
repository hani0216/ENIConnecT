const express = require('express');  // Importation d'Express
const app = express();               // Création de l'application Express

// Configuration du port (valeur fixe)
const port = 3000;

// Route de base
app.get('/', (req, res) => {
  res.send('Serveur Node.js sans dotenv fonctionne !');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
