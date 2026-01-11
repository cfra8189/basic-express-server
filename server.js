const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/api/fun-fact', async (req, res) => {
    try {
        const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
        res.json({ fact: response.data.text });
    } catch (error) {
        console.error('Error fetching fun fact:', error.message);
        res.status(500).json({ error: 'Failed to fetch fun fact' });
    }
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})