// controllers/publicationController.js
const Publication = require('../models/publication'); // Le modèle Publication
const User = require('../models/User'); // Le modèle User

// Créer une nouvelle publication
exports.creerPublication = async (req, res) => {
  try {
    const { titre, contenu, estAnonyme, auteur } = req.body;
    
    if (!auteur) {
      return res.status(400).json({ message: "L'utilisateur est requis pour la publication" });
    }

    const nouvellePublication = new Publication({
      titre,
      contenu,
      auteur,
      estAnonyme,
    });

    await nouvellePublication.save();
    res.status(201).json({ message: 'Publication créée avec succès', publication: nouvellePublication });
  } catch (err) {
    res.status(400).json({ message: 'Erreur lors de la création de la publication', erreur: err.message });
  }
};


// Récupérer toutes les publications
exports.getAllPublications = async (req, res) => {
  try {
    const publications = await Publication.find().populate('auteur', 'nom email'); // Remplir le champ "auteur" avec les détails de l'utilisateur
    res.status(200).json(publications);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des publications', erreur: err.message });
  }
};

// Récupérer une publication par ID
exports.getPublicationById = async (req, res) => {
  try {
    const publication = await Publication.findById(req.params.id).populate('auteur', 'nom email');
    if (!publication) {
      return res.status(404).json({ message: 'Publication non trouvée' });
    }
    res.status(200).json(publication);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération de la publication', erreur: err.message });
  }
};

// Supprimer une publication
exports.supprimerPublication = async (req, res) => {
  try {
    const publication = await Publication.findByIdAndDelete(req.params.id);
    if (!publication) {
      return res.status(404).json({ message: 'Publication non trouvée' });
    }
    res.status(200).json({ message: 'Publication supprimée avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la suppression de la publication', erreur: err.message });
  }
};

// Mettre à jour une publication
exports.updatePublication = async (req, res) => {
  try {
    const updates = req.body; // Contient les champs à mettre à jour

    // Chercher et mettre à jour la publication
    const publication = await Publication.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true } // Retourne la publication mise à jour
    ).populate('auteur', 'nom email');

    if (!publication) {
      return res.status(404).json({ message: 'Publication non trouvée' });
    }

    res.status(200).json({ message: 'Publication mise à jour avec succès', publication });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la publication', erreur: err.message });
  }
};

