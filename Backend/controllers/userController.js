const Utilisateur = require("../models/User"); // Chemin vers le modèle

// Créer un utilisateur
const createUser = async (req, res) => {
  try {
    const { nomUtilisateur, email, motDePasse, role, filiere, classe, option } =
      req.body;

    // Vérifier si l'utilisateur existe déjà
    const utilisateurExistant = await Utilisateur.findOne({ email });
    if (utilisateurExistant) {
      return res
        .status(400)
        .json({ message: "Un utilisateur avec cet email existe déjà." });
    }

    // Créer un nouvel utilisateur (sans hachage)
    const utilisateur = new Utilisateur({
      nomUtilisateur,
      email,
      motDePasse, // mot de passe en clair (non haché)
      role,
      filiere: role === "étudiant" ? filiere : null,
      classe: role === "étudiant" ? classe : null,
      option: role === "étudiant" ? option : null,
    });

    // Sauvegarder dans la base de données
    const savedUser = await utilisateur.save();
    res.status(201).json({ message: "Utilisateur créé avec succès", savedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer un utilisateur par ID
const getUserById = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findById(req.params.id);
    if (!utilisateur) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }
    res.status(200).json(utilisateur);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un utilisateur
const updateUser = async (req, res) => {
  try {
    const updates = req.body;

    // Suppression du hachage lors de la mise à jour
    // Pas besoin de traiter `updates.motDePasse`

    const utilisateur = await Utilisateur.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true } // Retourner l'utilisateur mis à jour
    );

    if (!utilisateur) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }

    res.status(200).json({ message: "Utilisateur mis à jour", utilisateur });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un utilisateur
const deleteUser = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByIdAndDelete(req.params.id);
    if (!utilisateur) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }
    res.status(200).json({ message: "Utilisateur supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Récupérer tous les utilisateurs
const getAllUsers = async (req, res) => {
    try {
      const utilisateurs = await Utilisateur.find(); // Récupère tous les utilisateurs depuis la base
      res.status(200).json(utilisateurs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = { createUser, getUserById, updateUser, deleteUser, getAllUsers };
  