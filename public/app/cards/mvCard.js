angular.module('app').factory('mvCard', function ($resource) {
    var CardResource = $resource('/api/cards/:cardId', {cardId: "@cardId"}, {
        update: {method: 'PUT', isArray: false}
    });

    return CardResource;
});