const { app } = require('@azure/functions');
const db = require('./db'); // Assuming you have a db.js file that handles database operations

app.http('createExample', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed a POST request for url "${request.url}"`);

        // In a POST operation, we typically create data. Here, we're getting a 'name' from the request body.
        const name = request.body.name;

        // If the name exists, we create a new entry in the database
        if (name) {
            try {
                const data = await db.createData(name); // Assuming you have a createData function in your db.js file
                return { status: 201, body: data };
            } catch (error) {
                context.log(`Error creating data: ${error}`);
                return { status: 500, body: 'Error creating data' };
            }
        } else {
            return { status: 400, body: 'No name provided' };
        }
    }
});