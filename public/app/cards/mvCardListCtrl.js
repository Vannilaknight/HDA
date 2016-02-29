angular.module('app').controller('mvCardListCtrl', function ($scope, mvCachedCards) {
    $scope.cards = mvCachedCards.query();

    $scope.sortOptions = [{value: "name", text: "Sort by Card Name"},
        {value: "playerClass", text: "Sort by Player Class"},
        {value: "cost", text: "Sort by Card Cost"},
        {value: "attack", text: "Sort by Card Attack"},
        {value: "health", text: "Sort by Card Health"}];
    $scope.sortOrder = $scope.sortOptions[0].value;
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
});