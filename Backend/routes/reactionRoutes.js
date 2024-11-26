const express = require('express');
const router = express.Router();


router.get('/reaction/:publicationId/positiveCount', getPositiveReactionsCountByPublicationId); // nombre des réactions positives
router.get('/reaction/:publicationId/negativeCount', getNegativeReactionsCountByPublicationId); // nombre des réactions négatives
router.post('/reaction/positive/:userId/:publicationId', reactPositive); // ajout d une réaction positive
router.post('/reaction/negative/:userId/:publicationId', reactNegative); //ajout d'une réaction négative
router.delete('/reaction/cancelPositive/:userId/:publicationId', cancelPositiveReaction); // annulatiion d une reaction positive
router.delete('/reaction/cancelNegative/:userId/:publicationId', cancelNegativeReaction); // annulatiion d une reaction negative 
router.post('/reaction/create/:publicationId', createReaction); // creeation dune reactioon assosié a une publication
router.delete('/publication/delete/:publicationId', deleteReaction); // suprimer reaction d'une publication

router.get('/publication/reactions/positive/:publicationId', getUsersWithPositiveReactions);
router.get('/publication/reactions/negative/:publicationId', getUsersWithNegativeReactions);
router.get('/publication/reactions/all/:publicationId', getAllUsersReactions);





module.exports = router;