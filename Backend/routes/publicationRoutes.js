// routes/publicationRoutes.js
const express = require('express');
const router = express.Router();
const publicationController = require('../controllers/publicationController');

// Créer une publication
router.post('/', publicationController.creerPublication);

// Récupérer toutes les publications
router.get('/', publicationController.getAllPublications);

// Récupérer une publication par son ID
router.get('/:id', publicationController.getPublicationById);

// Supprimer une publication par son ID
router.delete('/:id', publicationController.supprimerPublication);

module.exports = router;
