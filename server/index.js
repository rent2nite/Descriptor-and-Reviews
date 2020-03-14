const express = require('express');
const app = express();
const db = require('../db/index.js');
// const seeder = require('../seed.js');
const Model = require('./models.js');

const port = 1048;
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));


// url 

app.get('/houses', (req, res) => {
    Model.get((err, data) => {
        if (err) {
            res.status(400).end();
        } else {
            res.send(data);
        }
    })
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

