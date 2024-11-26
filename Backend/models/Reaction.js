const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema du modèle de réaction
const reactionSchema = new Schema({
  publication: {
    type: Schema.Types.ObjectId,
    ref: 'Publication',
    required: true
  },
  userReactions: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        unique: true
      },
      reactionType: {
        type: String,
        enum: ['positive', 'negative'],
        required: true
      }
    }
  ],
  positiveReactionsCount: {
    type: Number,
    default: 0
  },
  negativeReactionsCount: {
    type: Number,
    default: 0
  }
});

// Modèle de réaction
const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;