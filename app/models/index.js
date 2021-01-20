const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const objModels = {
    mongoose,
    user: require("./user.model"),
};

module.exports = objModels;