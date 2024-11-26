// Importation du modèle Reaction
const Reaction = require('../models/Reaction');

// ==============================
// Récupérer le nombre de réactions positives
// ==============================
exports.getPositiveReactionsCountByPublicationId = async (req, res) => {
  const publicationId = req.params.publicationId;

  try {
    const reaction = await Reaction.findOne({ publication: publicationId });
    
    // Vérifier si la réaction existe
    if (!reaction) {
      return res.status(404).json({ error: 'Réaction non trouvée pour cette publication.' });
    }

    return res.json({ positiveReactionsCount: reaction.positiveReactionsCount });
  } catch (err) {
    return res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération du nombre de réactions positives.' });
  }
};

// ==============================
// Récupérer le nombre de réactions négatives
// ==============================
exports.getNegativeReactionsCountByPublicationId = async (req, res) => {
  const publicationId = req.params.publicationId;

  try {
    const reaction = await Reaction.findOne({ publication: publicationId });
    
    // Vérifier si la réaction existe
    if (!reaction) {
      return res.status(404).json({ error: 'Réaction non trouvée pour cette publication.' });
    }

    return res.json({ negativeReactionsCount: reaction.negativeReactionsCount });
  } catch (err) {
    return res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération du nombre de réactions négatives.' });
  }
};

// ==============================
// Ajouter une réaction positive
// ==============================
exports.reactPositive = async (req, res) => {
  const { userId, publicationId } = req.params;

  try {
    let reaction = await Reaction.findOne({ publication: publicationId });

    // Créer une nouvelle réaction si elle n'existe pas
    if (!reaction) {
      reaction = new Reaction({ publication: publicationId });
    }

    // Vérifier si l'utilisateur a déjà réagi
    const userReaction = reaction.userReactions.find(
      (userReact) => String(userReact.user) === userId
    );

    if (!userReaction) {
      // Ajouter une nouvelle réaction positive
      reaction.userReactions.push({ user: userId, reactionType: 'positive' });
      reaction.positiveReactionsCount += 1;
    } else if (userReaction.reactionType === 'negative') {
      // Changer la réaction de négative à positive
      userReaction.reactionType = 'positive';
      reaction.positiveReactionsCount += 1;
      reaction.negativeReactionsCount -= 1;
    }

    await reaction.save();

    return res.json({ message: 'Réaction positive enregistrée avec succès.' });
  } catch (err) {
    return res.status(500).json({ error: 'Une erreur s\'est produite lors de la réaction positive.' });
  }
};

// ==============================
// Ajouter une réaction négative
// ==============================
exports.reactNegative = async (req, res) => {
  const { userId, publicationId } = req.params;

  try {
    let reaction = await Reaction.findOne({ publication: publicationId });

    // Créer une nouvelle réaction si elle n'existe pas
    if (!reaction) {
      reaction = new Reaction({ publication: publicationId });
    }

    // Vérifier si l'utilisateur a déjà réagi
    const userReaction = reaction.userReactions.find(
      (userReact) => String(userReact.user) === userId
    );

    if (!userReaction) {
      // Ajouter une nouvelle réaction négative
      reaction.userReactions.push({ user: userId, reactionType: 'negative' });
      reaction.negativeReactionsCount += 1;
    } else if (userReaction.reactionType === 'positive') {
      // Changer la réaction de positive à négative
      userReaction.reactionType = 'negative';
      reaction.negativeReactionsCount += 1;
      reaction.positiveReactionsCount -= 1;
    }

    await reaction.save();

    return res.json({ message: 'Réaction négative enregistrée avec succès.' });
  } catch (err) {
    return res.status(500).json({ error: 'Une erreur s\'est produite lors de la réaction négative.' });
  }
};

// ==============================
// Annuler une réaction positive
// ==============================
exports.cancelPositiveReaction = async (req, res) => {
  const { userId, publicationId } = req.params;

  try {
    let reaction = await Reaction.findOne({ publication: publicationId });

    // Vérifier si la réaction existe
    if (!reaction) {
      return res.status(404).json({ error: 'Réaction non trouvée pour cette publication.' });
    }

    const userReactionIndex = reaction.userReactions.findIndex(
      (userReact) => String(userReact.user) === userId
    );

    // Vérifier si l'utilisateur a réagi positivement
    if (userReactionIndex === -1 || reaction.userReactions[userReactionIndex].reactionType !== 'positive') {
      return res.status(400).json({ error: 'L\'utilisateur n\'a pas réagi positivement à cette publication.' });
    }

    // Supprimer la réaction positive
    reaction.userReactions.splice(userReactionIndex, 1);
    reaction.positiveReactionsCount -= 1;

    await reaction.save();

    return res.json({ message: 'Réaction positive annulée avec succès.' });
  } catch (err) {
    return res.status(500).json({ error: 'Une erreur s\'est produite lors de l\'annulation de la réaction positive.' });
  }
};

// ==============================
// Annuler une réaction négative
// ==============================
exports.cancelNegativeReaction = async (req, res) => {
  const { userId, publicationId } = req.params;

  try {
    let reaction = await Reaction.findOne({ publication: publicationId });

    // Vérifier si la réaction existe
    if (!reaction) {
      return res.status(404).json({ error: 'Réaction non trouvée pour cette publication.' });
    }

    const userReactionIndex = reaction.userReactions.findIndex(
      (userReact) => String(userReact.user) === userId
    );

    // Vérifier si l'utilisateur a réagi négativement
    if (userReactionIndex === -1 || reaction.userReactions[userReactionIndex].reactionType !== 'negative') {
      return res.status(400).json({ error: 'L\'utilisateur n\'a pas réagi négativement à cette publication.' });
    }

    // Supprimer la réaction négative
    reaction.userReactions.splice(userReactionIndex, 1);
    reaction.negativeReactionsCount -= 1;

    await reaction.save();

    return res.json({ message: 'Réaction négative annulée avec succès.' });
  } catch (err) {
    return res.status(500).json({ error: 'Une erreur s\'est produite lors de l\'annulation de la réaction négative.' });
  }
};

// ==============================
// Créer une nouvelle réaction
// ==============================
exports.createReaction = async (req, res) => {
  const { publicationId } = req.params;

  try {
    let reaction = await Reaction.findOne({ publication: publicationId });

    // Vérifier si une réaction existe déjà
    if (reaction) {
      return res.status(400).json({ error: 'Une réaction existe déjà pour cette publication.' });
    }

    // Créer et enregistrer une nouvelle réaction
    reaction = new Reaction({ publication: publicationId });
    await reaction.save();

    return res.json({ message: 'Réaction créée avec succès pour la nouvelle publication.' });
  } catch (err) {
    return res.status(500).json({ error: 'Une erreur s\'est produite lors de la création de la réaction pour la nouvelle publication.' });
  }
};

// ==============================
// Supprimer une réaction
// ==============================
exports.deleteReaction = async (req, res) => {
  const { publicationId } = req.params;

  try {
    const reaction = await Reaction.findOneAndDelete({ publication: publicationId });

    // Vérifier si la réaction existe
    if (!reaction) {
      return res.status(404).json({ error: 'Aucune réaction trouvée pour cette publication.' });
    }

    return res.json({ message: 'Réaction supprimée avec succès suite à la suppression de la publication.' });
  } catch (err) {
    return res.status(500).json({ error: 'Une erreur s\'est produite lors de la suppression de la réaction associée à la publication.' });
  }
};

// ==============================
// Récupérer les utilisateurs avec des réactions positives
// ==============================
exports.getUsersWithPositiveReactions = async (req, res) => {
  const { publicationId } = req.params;

  try {
    const reaction = await Reaction.findOne({ publication: publicationId });

    // Vérifier si la réaction existe
    if (!reaction) {
      return res.status(404).json({ error: 'Aucune réaction trouvée pour cette publication.' });
    }

    // Filtrer les utilisateurs avec des réactions positives
    const usersWithPositiveReactions = reaction.userReactions.filter(userReact => userReact.reactionType === 'positive');
    
    return res.json(usersWithPositiveReactions);
  } catch (err) {
    return res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des utilisateurs avec des réactions positives.' });
  }
};

// ==============================
// Récupérer les utilisateurs avec des réactions négatives
// ==============================
exports.getUsersWithNegativeReactions = async (req, res) => {
  const { publicationId } = req.params;

  try {
    const reaction = await Reaction.findOne({ publication: publicationId });

    // Vérifier si la réaction existe
    if (!reaction) {
      return res.status(404).json({ error: 'Aucune réaction trouvée pour cette publication.' });
    }

    // Filtrer les utilisateurs avec des réactions négatives
    const usersWithNegativeReactions = reaction.userReactions.filter(userReact => userReact.reactionType === 'negative');
    
    return res.json(usersWithNegativeReactions);
  } catch (err) {
    return res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des utilisateurs avec des réactions négatives.' });
  }
};

// ==============================
// Récupérer toutes les réactions d'utilisateurs
// ==============================
exports.getAllUsersReactions = async (req, res) => {
  const { publicationId } = req.params;

  try {
    const reaction = await Reaction.findOne({ publication: publicationId });

    // Vérifier si la réaction existe
    if (!reaction) {
      return res.status(404).json({ error: 'Aucune réaction trouvée pour cette publication.' });
    }

    return res.json(reaction.userReactions);
  } catch (err) {
    return res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération de tous les utilisateurs ayant réagi à la publication.' });
  }
};