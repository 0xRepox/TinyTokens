const express = require('express');
const Donation = require('../models/Donation');
const { processDonation } = require('../services/blockchainService');
const router = express.Router();

// Make a donation
router.post('/', async (req, res) => {
  const { userId, charityId, amount } = req.body;
  
  try {
    // Process donation using blockchain service
    const transactionHash = await processDonation(userId, charityId, amount);
    
    // Save donation to database
    const donation = new Donation({ user: userId, charity: charityId, amount, transactionHash });
    await donation.save();
    
    res.json({ success: true, donation });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
