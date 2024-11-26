const express = require('express');
const router = express.Router();


router.get('/reaction/:publicationId/positiveCount', getPositiveReactionsCountByPublicationId); // nombre des réactions positives
router.get('/reaction/:publicationId/negativeCount', getNegativeReactionsCountByPublicationId); // nombre des réactions négatives
router.post('/reaction/positive/:userId/:publicationId', reactPositive); // ajout d une réaction positive
router.post('/reaction/negative/:userId/:publicationId', reactNegative); //ajout d'un réaction négative

router.post('/reaction/:publicationId/decrementPositive',decrementPositive);
router.post('/reaction/:publicationId/incrementNegative',incrementNegative);
router.post('/reaction/:publicationId/decrementNegative',decrementNegative);
router.post('/reaction/:publicationId/create',createReaction);
router.delete('/reaction/:publicationId/delete',deleteReaction);
router.get('/reaction/:publicationId',getReactionsByPublicationId);








module.exports = router;