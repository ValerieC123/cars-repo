module.exports = async function greetings (context, req) {
    context.res.json({
        text: "Hello from the API"
    });
    const express = require('express');
    const app = express();
    app.use(express.json());
    const PORT = process.env.PORT || 3001;
    const cars = require('./cars.json');

    app.get('/cars', (req, res) => {
        console.log(res);
    });

    app.listen(PORT, () => {
        console.log(`Server started at http://localhost:${PORT}`);
        
    });
};