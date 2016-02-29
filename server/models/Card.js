var mongoose = require('mongoose'),
    fs = require("fs");



var cardSchema = mongoose.Schema({
    cardId: {type: String},
    name: {type: String},
    type: {type: String},
    cardSet: {type: String},
    text: {type: String},
    locale: {type: String},
    playerClass: {type: String},
    mechanics: [],
    race: {type: String},
    faction: {type: String},
    rarity: {type: String},
    img: {type: String},
    imgGold: {type: String},
    collectible: {type: Boolean},
    attack: {type: String},
    health: {type: String},
    cost: {type: String},
    flavor: {type: String},
    artist: {type: String},
    howToGet: {type: String},
    howToGetGold: {type: String}
});
var Card = mongoose.model('Card', cardSchema);


function createDefaultCardDatabase() {
    console.log('setting cards');
    Card.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            var contents = fs.readFileSync("cards.json");
            var result = JSON.parse(contents);
            var cardSets = [result["Basic"], result["Classic"], result["Credits"], result["Naxxramas"], result["Goblins vs Gnomes"], result["Blackrock Mountain"], result["The Grand Tournament"], result["The League of Explorers"]];
            cardSets.forEach(function (cardSet) {
                cardSet.forEach(function (card) {
                    Card.create({
                        cardId: card.cardId,
                        name: card.name,
                        type: card.type,
                        cardSet: card.cardSet,
                        text: card.text,
                        locale: card.locale,
                        playerClass: card.playerClass,
                        mechanics: card.mechanics,
                        race: card.race,
                        faction: card.faction,
                        rarity: card.rarity,
                        img: card.img,
                        imgGold: card.imgGold,
                        collectible: card.collectible,
                        attack: card.attack,
                        health: card.health,
                        cost: card.cost,
                        flavor: card.flavor,
                        artist: card.artist,
                        howToGet: card.howToGet,
                        howToGetGold: card.howToGetGold
                    });
                });
            });
        }
    })
}

exports.createDefaultCards = createDefaultCardDatabase;