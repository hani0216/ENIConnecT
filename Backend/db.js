const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EniConnecT', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connexion à la base de données locale MongoDB réussie');
}).catch(err => {
    console.error('Erreur de connexion à la base de données MongoDB locale', err);
});