// testConnection.js
const connectDB = require('./config/db'); // Assurez-vous que le chemin est correct

const testConnection = async () => {
    await connectDB();
};

testConnection();