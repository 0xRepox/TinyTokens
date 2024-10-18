const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const donationRoutes = require('./routes/donations');
const charityRoutes = require('./routes/charities');
const userRoutes = require('./routes/users');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/donations', donationRoutes);
app.use('/api/charities', charityRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
