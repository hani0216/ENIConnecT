const express = require('express');
const router = express.Router();

// Créer une réaction pour une publication
router.post('/reaction/create/:publicationId', createReaction);

// Ajouter une réaction positive pour un utilisateur et une publication
router.post('/reaction/positive/:userId/:publicationId', reactPositive);

// Ajouter une réaction négative pour un utilisateur et une publication  
router.post('/reaction/negative/:userId/:publicationId', reactNegative);



// Récupérer le nombre de réactions positives pour une publication
router.get('/reaction/:publicationId/positiveCount', getPositiveReactionsCountByPublicationId);

// Récupérer le nombre de réactions négatives pour une publication
router.get('/reaction/:publicationId/negativeCount', getNegativeReactionsCountByPublicationId);



// Annuler une réaction positive pour un utilisateur et une publication
router.delete('/reaction/cancelPositive/:userId/:publicationId', cancelPositiveReaction);

// Annuler une réaction négative pour un utilisateur et une publication
router.delete('/reaction/cancelNegative/:userId/:publicationId', cancelNegativeReaction);

// Supprimer les réactions pour une publication
router.delete('/publication/delete/:publicationId', deleteReaction);



// Récupérer les utilisateurs avec des réactions positives pour une publication
router.get('/publication/reaction/positive/:publicationId', getUsersWithPositiveReactions);

// Récupérer les utilisateurs avec des réactions négatives pour une publication
router.get('/publication/reaction/negative/:publicationId', getUsersWithNegativeReactions);

// Récupérer toutes les réactions pour une publication
router.get('/publication/reaction/all/:publicationId', getAllUsersReactions);

module.exports = router;