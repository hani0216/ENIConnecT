const express = require("express");
const router = express.Router();
const {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
} = require("../controllers/userController");

// Routes pour les utilisateurs
router.post("/", createUser); // Créer un utilisateur
router.get("/", getAllUsers); // Récupérer tous les utilisateurs
router.get("/:id", getUserById); // Récupérer un utilisateur par ID
router.put("/:id", updateUser); // Mettre à jour un utilisateur
router.delete("/:id", deleteUser); // Supprimer un utilisateur

module.exports = router;
