/*module.exports = async function greetingsAdd (context, req) {
    context.res.json({
        text: "Hello from the Add API"
        
    });
    
};*/

module.exports = async function  (context, req) {
    context.res.headers = {
        "Content-Type": "application/json"
    };

    // Sample cars data
    //We need to get the cars data and pass it to the cars.json file
    const cars = [
        { id: 1, make: 'Toyota', model: 'Corolla', year: 2020 },
        { id: 2, make: 'Honda', model: 'Civic', year: 2019 },
        { id: 3, make: 'Ford', model: 'Fusion', year: 2018 }
    ];

    // Route handler for GET /cars/all
    if (req.method === "GET" && req.url === "/cars/all") {
        // Send the cars data as JSON
        context.res.body = cars;
        
        // Log the number of cars
        context.log("Number of cars: " + cars.length);
    } else {
        context.res = {
            status: 404,
            body: "Not Found"
        };
    }
};
