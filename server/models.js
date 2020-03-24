const seeder = require('../seed.js');
const db = require('../db/index.js');

const Model = {
    get: (callback, query) => {
        db.find(callback, query)
    },
    getReviews: (callback, query) => {
        db.findReviews(callback, query)
    }
}


module.exports = Model;