// controllers/commentaireController.js
const Commentaire = require('../models/Commentaire');
const Publication = require('../models/publication');
const User = require('../models/User'); // Assurez-vous que le modèle User est correct

// Créer un commentaire pour une publication
exports.creerCommentaire = async (req, res) => {
  try {
    const { contenu, publicationId, auteurId } = req.body;

    // Vérifier si la publication existe
    const publication = await Publication.findById(publicationId);
    if (!publication) {
      return res.status(404).json({ message: 'Publication non trouvée' });
    }

    // Créer le commentaire
    const commentaire = new Commentaire({
      contenu,
      auteur: auteurId,
      publication: publicationId,
    });

    const savedCommentaire = await commentaire.save();
    res.status(201).json({
      message: 'Commentaire ajouté avec succès',
      commentaire: savedCommentaire,
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout du commentaire', erreur: error.message });
  }
};

// Récupérer les commentaires d'une publication
exports.getCommentairesParPublication = async (req, res) => {
  try {
    const publicationId = req.params.publicationId;

    // Vérifier si la publication existe
    const publication = await Publication.findById(publicationId);
    if (!publication) {
      return res.status(404).json({ message: 'Publication non trouvée' });
    }

    const commentaires = await Commentaire.find({ publication: publicationId }).populate('auteur', 'nom email');
    res.status(200).json(commentaires);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des commentaires', erreur: error.message });
  }
};

// Mettre à jour un commentaire
exports.updateCommentaire = async (req, res) => {
  try {
    const { contenu } = req.body;
    const commentaireId = req.params.id;

    const commentaire = await Commentaire.findByIdAndUpdate(
      commentaireId,
      { contenu },
      { new: true } // Retourner le commentaire mis à jour
    );

    if (!commentaire) {
      return res.status(404).json({ message: 'Commentaire non trouvé' });
    }

    res.status(200).json({ message: 'Commentaire mis à jour', commentaire });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du commentaire', erreur: error.message });
  }
};

// Supprimer un commentaire
exports.supprimerCommentaire = async (req, res) => {
  try {
    const commentaireId = req.params.id;

    const commentaire = await Commentaire.findByIdAndDelete(commentaireId);
    if (!commentaire) {
      return res.status(404).json({ message: 'Commentaire non trouvé' });
    }

    res.status(200).json({ message: 'Commentaire supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du commentaire', erreur: error.message });
  }
};
