const express = require('express');
const router = express.Router();
const commentaireController = require('../controllers/commentaireController');

// Routes
router.post('/', commentaireController.creerCommentaire); // Créer un commentaire
router.get('/publication/:publicationId', commentaireController.getCommentairesParPublication); // Récupérer les commentaires d'une publication
router.put('/:id', commentaireController.updateCommentaire); // Mettre à jour un commentaire
router.delete('/:id', commentaireController.supprimerCommentaire); // Supprimer un commentaire

module.exports = router;
