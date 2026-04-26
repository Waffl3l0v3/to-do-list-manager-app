require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => console.log('Connected to DB'));

app.use('/api/tasks', require('./routes/taskRoutes'));

app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from Server!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
