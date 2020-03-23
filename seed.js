const faker = require('faker');
const db = require('./db/index.js');

var randomNum = (num) => {
    var random = Math.floor(Math.random() * num);
    if (random !== 0) {
        return random;
    } else {
        return randomNum(num);
    }
}

var randomRate = () => {
    return Math.random() * 5.1
}


// let highlights = [
//     {'Entire Home': {
//         desc: 'You will have the entire house to yourself',
//         img: 'https://www.pngfind.com/pngs/m/91-918544_vector-clean-home-cleaning-icon-png-transparent-png.png'
//     }},
//     {"Sparkling Clean" : {
//         desc: 'Recent guests said this place was sparkling clean',
//         img: 'https://www.pngfind.com/pngs/m/91-918544_vector-clean-home-cleaning-icon-png-transparent-png.png'
//     }},
//     {'SuperHost': {
//         desc: 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
//         img:  'https://cdn2.vectorstock.com/i/1000x1000/66/31/approved-or-certified-medal-icon-award-symbol-vector-20606631.jpg'
//     }},
//     {'Great Location': {
//         desc: 'Recent guests said this place was in a great location',
//         img: 'https://cdn4.iconfinder.com/data/icons/maps-and-navigation-solid-icons-vol-1/72/19-512.png'
//     }},
//     {'Self Check-In': {
//         desc: 'Check yourself in with the keypad',
//         img: 'https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/104-512.png'
//     }}
// ]

const seeder = {
    save: (callback) => {
        console.log('hello from seeder')
        let count = 0;
        for (var i = 0; i < 100; i++) {
            var randomName = faker.name.findName();
            var randomCity = faker.address.city();
            var randomService;
            var randomWord = faker.lorem.word() + 'house';
            var randomReview = faker.lorem.paragraph();
            var randomOverview = faker.lorem.sentence();
            count++
            var guests = randomNum(10);
            var bedrooms = randomNum(6);
            var beds = randomNum(7);
            var baths = randomNum(4);

            
            db.save({
                id: count,
                host: randomName,
                houseName: randomWord,
                overview: randomOverview,
                location: randomCity,
                houseSpecs: {
                    guests: guests,
                    bedrooms: bedrooms,
                    beds: beds,
                    baths: baths
                },
                highlights: [randomNum(3), randomNum(3), randomNum(3), randomNum(3), randomNum(3)]
            }, callback)
        }
    },
    saveReviews: (callback) => {
        console.log('hello from seed reviews')
        for (var i = 0; i < 100; i++) {
            var randomReview = faker.lorem.paragraph();
            var randomName = faker.name.firstName();
            var randomDate = faker.date.past();
            var randomImage = faker.image.people();
            db.saveReviews({
                id: randomNum(101),
                name: randomName,
                date: randomDate,
                reviewScore: {
                    location: randomRate(),
                    accuracy: randomRate(),
                    cleanliness: randomRate(),
                    communication: randomRate(),
                    checkin: randomRate(),
                    value: randomRate()
                },
                review: randomReview,
                img: randomImage
            }, callback)
        }
    }
}

// seeder.save();
// seeder.saveReviews();


// module.exports.seeder = seeder;

