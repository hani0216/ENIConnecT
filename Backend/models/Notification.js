const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  type: String,
  message: String,
  destinataire: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Notification", notificationSchema);
