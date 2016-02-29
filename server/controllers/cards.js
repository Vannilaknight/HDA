var Card = require('mongoose').model('Card');
var unirest = require('unirest');

exports.getCards = function(req, res) {
    Card.find({}).exec(function(err, collection) {
        res.send(collection);
    })
};

exports.getCardById = function(req, res) {
    Card.findOne({cardId:req.params.cardId}).exec(function(err, card) {
        res.send(card);
    })
};

