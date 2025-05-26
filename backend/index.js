const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Placeholder for future routes
// app.use('/api/tasks', require('./routes/tasks'));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    app.use('/api/tasks', require('./routes/tasks'));
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});