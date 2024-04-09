module.exports = async function greetings (context, req) {
    context.res.json({
        text: "Hello from the API"
    });
};