const express = require('express');
const puppeteer = require('puppeteer');
const fs = require('fs');

const app = express();

app.get('/generate-png', async (req, res) => {
    try {
        const includeButton = req.query.includeButton === 'true'; // Check if query parameter 'includeButton' is 'true'
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:5173'); // Replace with your URL

        // Hide the button if includeButton is false
        if (!includeButton) {
            await page.evaluate(() => {
                document.querySelector('.btn').style.display = 'none';
            });
        }

        // Capture a screenshot of the page and save it as PNG
        const screenshot = await page.screenshot({ path: 'webpage.png' });

        await browser.close();

        res.sendFile('webpage.png', { root: __dirname }); // Send the PNG file as a response
    } catch (error) {
        console.error('Error generating PNG:', error);
        res.status(500).send('Error generating PNG');
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
