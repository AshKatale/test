const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// GET request
app.get('/', (req, res) => {
    res.json('Hello Ashitosh');
});

// POST request
app.post('/', (req, res) => {
    res.json('Hello Ashitosh');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
