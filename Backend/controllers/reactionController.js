const Reaction = require('../models/Reaction');


exports.getPositiveReactionsCountByPublicationId = async (req, res) => {
  const publicationId = req.params.publicationId;

  try {
    const reaction = await Reaction.findOne({ publication: publicationId });
    
    if (!reaction) {
      return res.status(404).json({ error: 'Réaction non trouvée pour cette publication.' });
    }

    return res.json({ positiveReactionsCount: reaction.positiveReactionsCount });
  } catch (err) {
    return res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération du nombre de réactions positives.' });
  }
};



exports.getNegativeReactionsCountByPublicationId = async (req, res) => {
  const publicationId = req.params.publicationId;

  try {
    const reaction = await Reaction.findOne({ publication: publicationId });
    
    if (!reaction) {
      return res.status(404).json({ error: 'Réaction non trouvée pour cette publication.' });
    }

    return res.json({ negativeReactionsCount: reaction.negativeReactionsCount });
  } catch (err) {
    return res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération du nombre de réactions négatives.' });
  }
};


exports.reactPositive = async (req, res) => {
  const { userId, publicationId } = req.params;

  try {
    let reaction = await Reaction.findOne({ publication: publicationId });

    if (!reaction) {
      reaction = new Reaction({ publication: publicationId });
    }

    const userReaction = reaction.userReactions.find(
      (userReact) => String(userReact.user) === userId
    );

    if (!userReaction) {
      reaction.userReactions.push({ user: userId, reactionType: 'positive' });
      reaction.positiveReactionsCount += 1;
    } else if (userReaction.reactionType === 'negative') {
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


exports.reactNegative = async (req, res) => {
  const { userId, publicationId } = req.params;

  try {
    let reaction = await Reaction.findOne({ publication: publicationId });

    if (!reaction) {
      reaction = new Reaction({ publication: publicationId });
    }

    const userReaction = reaction.userReactions.find(
      (userReact) => String(userReact.user) === userId
    );

    if (!userReaction) {
      reaction.userReactions.push({ user: userId, reactionType: 'negative' });
      reaction.negativeReactionsCount += 1;
    } else if (userReaction.reactionType === 'positive') {
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

 

exports.cancelPositiveReaction = async (req, res) => {
  const { userId, publicationId } = req.params;

  try {
    let reaction = await Reaction.findOne({ publication: publicationId });

    if (!reaction) {
      return res.status(404).json({ error: 'Réaction non trouvée pour cette publication.' });
    }

    const userReactionIndex = reaction.userReactions.findIndex(
      (userReact) => String(userReact.user) === userId
    );

    if (userReactionIndex === -1 || reaction.userReactions[userReactionIndex].reactionType !== 'positive') {
      return res.status(400).json({ error: 'L\'utilisateur n\'a pas réagi positivement à cette publication.' });
    }

    reaction.userReactions.splice(userReactionIndex, 1);
    reaction.positiveReactionsCount -= 1;

    await reaction.save();

    return res.json({ message: 'Réaction positive annulée avec succès.' });
  } catch (err) {
    return res.status(500).json({ error: 'Une erreur s\'est produite lors de l\'annulation de la réaction positive.' });
  }
};


exports.cancelNegativeReaction = async (req, res) => {
  const { userId, publicationId } = req.params;

  try {
    let reaction = await Reaction.findOne({ publication: publicationId });

    if (!reaction) {
      return res.status(404).json({ error: 'Réaction non trouvée pour cette publication.' });
    }

    const userReactionIndex = reaction.userReactions.findIndex(
      (userReact) => String(userReact.user) === userId
    );

    if (userReactionIndex === -1 || reaction.userReactions[userReactionIndex].reactionType !== 'negative') {
      return res.status(400).json({ error: 'L\'utilisateur n\'a pas réagi négativement à cette publication.' });
    }

    reaction.userReactions.splice(userReactionIndex, 1);
    reaction.negativeReactionsCount -= 1;

    await reaction.save();

    return res.json({ message: 'Réaction négative annulée avec succès.' });
  } catch (err) {
    return res.status(500).json({ error: 'Une erreur s\'est produite lors de l\'annulation de la réaction négative.' });
  }
};

exports.createReaction = async (req, res) => {
    const { publicationId } = req.params;
  
    try {
      let reaction = await Reaction.findOne({ publication: publicationId });
  
      if (reaction) {
        return res.status(400).json({ error: 'Une réaction existe déjà pour cette publication.' });
      }
  
      reaction = new Reaction({ publication: publicationId });
      await reaction.save();
  
      return res.json({ message: 'Réaction créée avec succès pour la nouvelle publication.' });
    } catch (err) {
      return res.status(500).json({ error: 'Une erreur s\'est produite lors de la création de la réaction pour la nouvelle publication.' });
    }
  };

  

exports.deleteReaction = async (req, res) => {
  const { publicationId } = req.params;

  try {
    const reaction = await Reaction.findOneAndDelete({ publication: publicationId });

    if (!reaction) {
      return res.status(404).json({ error: 'Aucune réaction trouvée pour cette publication.' });
    }

    return res.json({ message: 'Réaction supprimée avec succès suite à la suppression de la publication.' });
  } catch (err) {
    return res.status(500).json({ error: 'Une erreur s\'est produite lors de la suppression de la réaction associée à la publication.' });
  }
};

exports.getUsersWithPositiveReactions = async (req, res) => {
    const { publicationId } = req.params;
  
    try {
      const reaction = await Reaction.findOne({ publication: publicationId });
      
      if (!reaction) {
        return res.status(404).json({ error: 'Aucune réaction trouvée pour cette publication.' });
      }
  
      const usersWithPositiveReactions = reaction.userReactions.filter(userReact => userReact.reactionType === 'positive');
      return res.json(usersWithPositiveReactions);
    } catch (err) {
      return res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des utilisateurs avec des réactions positives.' });
    }
  };

  exports.getUsersWithNegativeReactions = async (req, res) => {
    const { publicationId } = req.params;
  
    try {
      const reaction = await Reaction.findOne({ publication: publicationId });
      
      if (!reaction) {
        return res.status(404).json({ error: 'Aucune réaction trouvée pour cette publication.' });
      }
  
      const usersWithNegativeReactions = reaction.userReactions.filter(userReact => userReact.reactionType === 'negative');
      return res.json(usersWithNegativeReactions);
    } catch (err) {
      return res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des utilisateurs avec des réactions négatives.' });
    }
  };


  exports.getAllUsersReactions = async (req, res) => {
    const { publicationId } = req.params;
  
    try {
      const reaction = await Reaction.findOne({ publication: publicationId });
      
      if (!reaction) {
        return res.status(404).json({ error: 'Aucune réaction trouvée pour cette publication.' });
      }
  
      return res.json(reaction.userReactions);
    } catch (err) {
      return res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération de tous les utilisateurs ayant réagi à la publication.' });
    }
  };

