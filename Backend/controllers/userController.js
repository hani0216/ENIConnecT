const User = require('../models/User');

// Exemple de méthode pour créer un utilisateur
exports.createUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const newUser = new User({ username, email, password, role });
    await newUser.save();
    res.status(201).json({ message: 'Utilisateur créé avec succès', user: newUser });
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création de l\'utilisateur', error });
  }
};

// Exemple de méthode pour récupérer tous les utilisateurs
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs', error });
  }
};
