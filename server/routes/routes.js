const projectsRoutes = require('./projects');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // // other routes
    projectsRoutes(app, fs);

};

module.exports = appRouter;