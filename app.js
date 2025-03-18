const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// GET request
app.get('/', (req, res) => {
    res.send('Hello Ashitosh');
});

// POST request
app.post('/', (req, res) => {
    res.send('Hello Ashitosh');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
