const { app } = require('@azure/functions');
const db = require('./db'); // Assuming you have a db.js file that handles database operations

app.http('getExample', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed a GET request for url "${request.url}"`);

        // In a GET operation, we typically retrieve data. Here, we're retrieving a 'name' from the query parameters.
        const id = request.query.get('id');

        // If the id exists, we fetch the corresponding data from the database
        if (id) {
            try {
                const data = await db.getData(id); // Assuming you have a getData function in your db.js file
                return { body: data };
            } catch (error) {
                context.log(`Error fetching data: ${error}`);
                return { status: 500, body: 'Error fetching data' };
            }
        } else {
            return { status: 400, body: 'No id provided' };
        }
    }
});