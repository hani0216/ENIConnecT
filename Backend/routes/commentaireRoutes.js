const express = require("express");
const router = express.Router();
const {
  creerCommentaire,
  getCommentairesParPublication,
  updateCommentaire,
  supprimerCommentaire,
} = require("../controllers/commentaireController");

// Routes pour les commentaires

router.post("/", creerCommentaire); // Créer un commentaire
router.get("/publication/:publicationId", getCommentairesParPublication); // Récupérer les commentaires d'une publication
router.put("/:id", updateCommentaire); // Mettre à jour un commentaire
router.delete("/:id", supprimerCommentaire); // Supprimer un commentaire

module.exports = router;