const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

function main() {
    mongoose.Promise = global.Promise;

    mongoose.connect(dbConfig.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("successfully connect to MongoDB")
    }).catch(err => {
        console.log('Could not connect to MongoDB', err)
    });
}

module.exports = {
    main: main
}

