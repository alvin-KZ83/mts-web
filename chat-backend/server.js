// This would be in a file like server.js in your backend project
const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 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` // Replace with your actual API key
            },
            body: JSON.stringify({
                prompt: userMessage,
                max_tokens: 150
            })
        });

        const data = await response.json();
        res.json({ message: data.choices[0].text.trim() });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error processing your request');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
