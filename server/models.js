const seeder = require('../seed.js');
const db = require('../db/index.js');

const Model = {
    get: (callback) => {
        db.find(callback)
    },
    getReviews: (callback, query) => {
        db.find(callback, query)
    }
}


module.exports = Model;