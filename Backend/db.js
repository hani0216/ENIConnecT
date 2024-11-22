const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://adminenit:adminenit@eniconnect.ewroc.mongodb.net/?retryWrites=true&w=majority&appName=ENIConnecT', {

}).then(() => {
    console.log('Connexion à la base de données locale MongoDB réussie');
}).catch(err => {
    console.error('Erreur de connexion à la base de données MongoDB locale', err);
});

