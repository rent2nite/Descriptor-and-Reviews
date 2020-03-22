const faker = require('faker');
const db = require('./db/index.js');

const randomNum = (num) => {
    var random = Math.floor(Math.random() * num);
    if (random !== 0) {
      return random;
    } else {
      return randomNum(num);
    }
  }

  let highlights = [
      {'Entire Home': 'You will have the entire house to yourself'},
      {'Sparkling Clean' : 'Recent guests said this place was sparkling clean'},
      {'SuperHost': 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.'},
      {'Great Location' : 'Recent guests said this place was in a great location'},
      {'Self Check-In': 'Check yourself in with the keypad'}
  ]

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
                location: randomCity
            }, callback)
        }
    }
}

// seeder.save();


// module.exports.seeder = seeder;

