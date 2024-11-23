const express = require('express');           // Importation d'Express
require('dotenv').config({ path: './.env' });  // Chargement des variables d'environnement
const connectDB = require('./config/db.js');  // Importation de la connexion DB


const publicationRoutes = require('./routes/publicationRoutes');
const userRoutes = require('./routes/userRoutes.js')

// Connexion à la base de données
connectDB();

const app = express();                        // Création de l'application Express

// Middleware pour le parsing JSON (si nécessaire)
app.use(express.json());
app.use('/api/publications', publicationRoutes);
app.use("/api/users", userRoutes);


// Route de base
app.get('/', (req, res) => {
  res.send('Serveur Node.js avec connexion MongoDB fonctionne !');
});

// Port par défaut si non défini dans le .env
const PORT = process.env.PORT || 5000;

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
