angular.module('app').controller('mvCardListCtrl', function ($scope, mvCachedCards) {
    $scope.cards = mvCachedCards.query();

    for(var x = 0; x < $scope.cards.length; x++){
        console.log('WORKS')
        $scope.cards[x].cost = parseInt($scope.cards[x].cost);
    }

    console.log($scope.cards)

    $scope.class;

    $scope.sortOptions = [{value: "name", text: "Sort by Card Name"},
        {value: "playerClass", text: "Sort by Player Class"},
        {value: "cost", text: "Sort by Card Cost"},
        {value: "attack", text: "Sort by Card Attack"},
        {value: "health", text: "Sort by Card Health"}];
    $scope.sortOrder = $scope.sortOptions[0].value;

    $scope.activeCard;

    $scope.setActiveImage = function (card) {
        $scope.activeCard = card;
    };

    $scope.setClass = function (cardClass) {
        if (cardClass == 'none') {
            $scope.class = null;
        } else {
            $scope.class = cardClass;
        }
    }
}).filter('isCollectible', function () {
    return function (cards) {
        var filteredCards = [];
        cards.forEach(function (card) {
            if (card.collectible) {
                filteredCards.push(card);
            }
        });
        return filteredCards;
    };
}).filter('cardCost', function() {
    return function(card) {
        console.log(card);
        return parseInt(card.cost);
    };
});