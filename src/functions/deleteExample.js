const { app } = require('@azure/functions');
const db = require('./db'); // Assuming you have a db.js file that handles database operations

app.http('deleteExample', {
    methods: ['DELETE'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed a DELETE request for url "${request.url}"`);

        // In a DELETE operation, we typically delete data. Here, we're getting an 'id' from the request body.
        const id = request.body.id;

        // If the id exists, we delete the corresponding entry in the database
        if (id) {
            try {
                await db.deleteData(id); // Assuming you have a deleteData function in your db.js file
                return { status: 200, body: 'Data deleted successfully' };
            } catch (error) {
                context.log(`Error deleting data: ${error}`);
                return { status: 500, body: 'Error deleting data' };
            }
        } else {
            return { status: 400, body: 'No id provided' };
        }
    }
});