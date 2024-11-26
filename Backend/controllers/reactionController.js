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


const Reaction = require('../models/Reaction');

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