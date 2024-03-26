const { app } = require('@azure/functions');
const db = require('./db'); // Assuming you have a db.js file that handles database operations

app.http('updateExample', {
    methods: ['PUT'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed a PUT request for url "${request.url}"`);

        // In a PUT operation, we typically update data. Here, we're getting an 'id' and 'name' from the request body.
        const id = request.body.id;
        const name = request.body.name;

        // If the id and name exist, we update the corresponding entry in the database
        if (id && name) {
            try {
                const data = await db.updateData(id, name); // Assuming you have an updateData function in your db.js file
                return { status: 200, body: data };
            } catch (error) {
                context.log(`Error updating data: ${error}`);
                return { status: 500, body: 'Error updating data' };
            }
        } else {
            return { status: 400, body: 'No id or name provided' };
        }
    }
});