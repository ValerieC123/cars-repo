module.exports = async function greetings (context, req) {
    context.res.json({
        text: "Hello from the API"
    });

    
    app.get('/cars', (req, res) => {
        console.log(res);
    });
};