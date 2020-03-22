const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser : true, useUnifiedTopology: true});


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
    highlights: []
});

let House = mongoose.model('House', houseSchema);

let save = (houses, callback) => {

    var newHouse = new House (houses);
    newHouse.save((err, newHouse) => {
        if (err) {
            return console.log(err)
        } else{
            console.log('success from save')
            // callback(null, houses)
        }
    }) 
}

let find = (callback) => {
    House.find((err, data) => {
        if (err) {
            callback(err);
        } else{
            callback(null, data)
        }
    })
}

module.exports.save = save;
module.exports.find = find;

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
