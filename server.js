const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'hello world' });
});

app.get('/random', (req, res) => {
    const randomInt = Math.floor(Math.random() * 1000000);
    res.json({ random: randomInt });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Remove me
