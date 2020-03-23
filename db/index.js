const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('connection from database');
})



let houseSchema = mongoose.Schema({
    id: Number,
    host: String,
    houseName: String,
    overview: String,
    location: String,
    houseSpecs: {
        guests: Number,
        bedrooms: Number,
        beds: Number,
        baths: Number
    },
    highlights: [Number]

});

let reviewSchema = mongoose.Schema({
    id: Number,
    name: String,
    date: String,
    reviewScore: {
        location: Number,
        accuracy: Number,
        cleanliness: Number,
        communication: Number,
        checkin: Number,
        value: Number
    },
    review: String,
    img: String,

})

let House = mongoose.model('House', houseSchema);

let Review = mongoose.model('Review', reviewSchema);


let save = (houses, callback) => {

    var newHouse = new House(houses);
    newHouse.save((err, newHouse) => {
        if (err) {
            return console.log(err)
        } else {
            console.log('success from save')
            // callback(null, houses)
        }
    })
}


let saveReviews = (reviews, callback) => {
    var newReview = new Review(reviews);
    newReview.save((err, newHouse) => {
        if (err) {
            return console.log(err)
        } else {
            console.log('success from save review')
        }
    })
}

let find = (callback, query) => {
    if (query !== undefined) {
        Review.find({ id : query}, (err, data) => {
            if (err) {
                callback(err);
            } else {
                callback(null, data)
            }
        })
    } else {
        House.find((err, data) => {
            if (err) {
                callback(err);
            } else {
                callback(null, data)
            }
        })

    }
}

module.exports.save = save;
module.exports.find = find;
module.exports.saveReviews = saveReviews;

/*
host: String,
houseName: String,
overview : {
    Capacity: {
        Guests: Number,
        Bedrooms: Number,
        Beds: Number,
        Baths: Number
    }
    FeaturingDesc:
    Amenities: [String],
    TextDesc: String,
}


*/
