const faker = require('faker');
const db = require('./db/index.js');


const seeder = {
    save: (callback) => {
        console.log('hello from seeder')
        let count = 0;
        for (var i = 0; i < 100; i++) {
            var randomName = faker.name.findName();
            var randomCity = faker.address.city();
            var randomService;
            var randomWord = faker.lorem.word();
            var randomReview = faker.lorem.paragraph();
            var randomOverview = faker.lorem.sentence();
            count++
            db.save({
                id: count,
                host: randomName,
                overview: randomOverview,
                location: randomCity,
                services: randomWord
            }, callback)
        }
    }
}

seeder.save();


module.exports.seeder = seeder;

