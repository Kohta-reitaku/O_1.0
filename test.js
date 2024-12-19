const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

app.get('/images', async (req, res) => {
    try {
        const response = await axios.get('https://kohta-reitaku.github.io/O_1.0/Sample.html');
        const html = response.data;
        const $ = cheerio.load(html);
        const images = [];
        $('img').each((index, element) => {
            images.push($(element).attr('src'));
        });
        res.json(images);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching images' });
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

