// create web server using Express.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory comments array
let comments = [];

// Route to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Route to add a new comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.status(201).json(comment);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
