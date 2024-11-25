const express = require('express');
const router = express.Router();
const {
  creerPublication,
  getAllPublications,
  getPublicationById,
  supprimerPublication,
  updatePublication,
  getAllAnonymes,
  getNonAnonymes,
   // Nouvelle méthode
} = require('../controllers/publicationController');

// Routes pour les publications
router.post('/', creerPublication); // Créer une publication
router.get('/nonAnonymes', getNonAnonymes)  // pub non anonymes
router.get('/anonymes' ,getAllAnonymes )   ///publications/anonymes
router.get('/' , getAllPublications); //tous les publications
router.get('/:id', getPublicationById); // Récupérer une publication par ID
router.put('/:id', updatePublication); // Mettre à jour une publication
router.delete('/:id', supprimerPublication); // Supprimer une publication

module.exports = router;
