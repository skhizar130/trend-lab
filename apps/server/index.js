require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

app.get('/api/test', (req, res) => res.json({ message: "Welcome to TrendLab!" }));

app.listen(PORT, () => console.log("Server started successfully on port " + PORT));
