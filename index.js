const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());           // enable CORS for all requests
app.use(express.json());   // parse JSON

// Routes
app.use('/api/resources', require('./routes/resources'));
app.use('/api/goals', require('./routes/goals'));

// Test route
app.get('/', (req, res) => {
    res.send('Welcome to PathToSuccess!');
});

// Connect to MongoDB
const PORT = process.env.PORT || 5001;
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.error('❌ MongoDB connection error:', err.message));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


