// config/db.js
const mongoose = require('mongoose');
require('dotenv').config(); // Charge les variables d'environnement

const uri = process.env.MONGODB_URI; // L'URI de connexion à la base de données

const connectDB = async () => {
    try {
        await mongoose.connect(uri); // Supprimez les options obsolètes
        console.log("MongoDB connecté avec succès !");
    } catch (error) {
        console.error("Erreur de connexion à MongoDB :", error);
        //process.exit(1); // Arrête l'application en cas d'erreur
    }
};

module.exports = connectDB;