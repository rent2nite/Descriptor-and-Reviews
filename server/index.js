const express = require('express');
const app = express();
const db = require('../db/index.js');
// const seeder = require('../seed.js');
const Model = require('./models.js');

const port = 1000;
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));



// url 

app.get('/houses', (req, res) => {
    let query = req._parsedOriginalUrl.query
    // console.log(query)
    Model.get((err, data) => {
        if (err) {
            res.status(400).end();
        } else {
            res.send(data);
        }
    }, query)
})

app.get('/reviews', (req, res) => {
    let query = req._parsedOriginalUrl.query
    Model.getReviews((err, data) => {
        if (err) {
            res.status(400).end()
        } else {
            res.send(data)
        }
    }, query)
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

