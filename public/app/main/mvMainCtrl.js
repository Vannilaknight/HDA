angular.module('app').controller('mvMainCtrl', function ($scope, mvCachedCards) {
    $scope.cards = mvCachedCards.query();


}).filter('hasImage', function () {
    return function (cards) {
        var filteredCards = [];
        cards.forEach(function(card){
            if(card.img){
                filteredCards.push(card);
            }
        });
        return filteredCards;
    };
});

