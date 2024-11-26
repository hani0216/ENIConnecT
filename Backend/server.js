const express = require('express');           // Importation d'Express
require('dotenv').config({ path: './.env' });  // Chargement des variables d'environnement
const connectDB = require('./config/db.js');  // Importation de la connexion DB

const userRoutes = require('./routes/userRoutes.js')
const publicationRoutes = require('./routes/publicationRoutes');
const commentaireRoutes = require('./routes/commentaireRoutes');
const reactionRoutes = require ('./routes/reactionRoutes.js')


// Connexion à la base de données
connectDB();
// Création de l'application Express
const app = express();                        

// Middleware pour le parsing JSON (si nécessaire)
app.use(express.json());
app.use('/api/publications', publicationRoutes);
app.use("/api/users", userRoutes);
app.use('/api/comments', commentaireRoutes);
app.use ('/api/reactions' , reactionRoutes)



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
