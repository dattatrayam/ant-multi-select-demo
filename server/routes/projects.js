const projectsRoutes = (app, fs) => {

    // variables
    const dataPath = './data/projects.json';

    // helper methods
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };



    // READ
    app.get('/projects', (req, res) => {
        let page = req.query.page;
        let limit = req.query.limit;
        console.log("page", page);
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data).slice(0, (page + 1) * limit));
        });
    });




    // UPDATE
    app.put('/projects/:id', (req, res) => {

        readFile(data => {

            // add the new user
            const userId = req.params["id"];
            data[userId] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`users id:${userId} updated`);
            });
        },
            true);
    });



};

module.exports = projectsRoutes;