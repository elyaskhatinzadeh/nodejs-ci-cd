const express = require('express');
const app = express();
const port = 3000;

// Define a simple route
app.get('/', (req, res) => {
    res.json({
        data:  true,
        message: 'Hello from ghcr, welcome to the Node.js API!'
    });
});

app.get('/home', (req, res) => {
    res.json({ message: 'HOME!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
