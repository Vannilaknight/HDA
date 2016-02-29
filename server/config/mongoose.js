var mongoose = require('mongoose'),
    userModel = require('../models/User'),
    courseModel = require('../models/Course'),
    cardModel = require('../models/Card');

module.exports = function (config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('HDA db opened');
    });

    userModel.createDefaultUsers();
    courseModel.createDefaultCourses();
    cardModel.createDefaultCards();

};

