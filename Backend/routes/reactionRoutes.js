const express = require('express');
const router = express.Router();
const { 
    getPositiveReactionsCountByPublicationId ,
    getNegativeReactionsCountByPublicationId ,
    reactNegative ,
    reactPositive ,
    cancelNegativeReaction , 
    cancelPositiveReaction ,
    createReaction ,
    getUsersWithNegativeReactions ,
    getUsersWithPositiveReactions ,
    deleteReaction ,
    getAllUsersReactions ,

} =require('../controllers/reactionController')


router.get('/:publicationId/positiveCount', getPositiveReactionsCountByPublicationId); // nombre des réactions positives ok
router.get('/:publicationId/negativeCount', getNegativeReactionsCountByPublicationId); // nombre des réactions négatives ok 
router.post('/positive/:userId/:publicationId', reactPositive); // ajout d une réaction positive   ok 
router.post('/negative/:userId/:publicationId', reactNegative); //ajout d'une réaction négative    ok
router.delete('/cancelPositive/:userId/:publicationId', cancelPositiveReaction); // annulatiion d une reaction positive
router.delete('/cancelNegative/:userId/:publicationId', cancelNegativeReaction); // annulatiion d une reaction negative 
router.post('/create/:publicationId', createReaction); // creeation dune reactioon assosié a une publication   OK
router.delete('/publication/delete/:publicationId', deleteReaction); // suprimer reaction d'une publication 

router.get('/positive/:publicationId', getUsersWithPositiveReactions);
router.get('/negative/:publicationId', getUsersWithNegativeReactions);
router.get('/all/:publicationId', getAllUsersReactions);





module.exports = router;