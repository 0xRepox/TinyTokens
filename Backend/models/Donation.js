const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  charity: { type: mongoose.Schema.Types.ObjectId, ref: 'Charity' },
  amount: { type: Number, required: true },
  transactionHash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Donation', donationSchema);
