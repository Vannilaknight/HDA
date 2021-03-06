angular.module('app').controller('collectionAdderCtrl', function ($scope, mvCachedCards, mvAuth, mvIdentity) {
    $scope.cards = mvCachedCards.query();

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

    $scope.addCard = function (card) {

        var newUserData = mvIdentity.currentUser;

        console.log(newUserData);

        newUserData.cardCollection.push(card);

        mvAuth.updateCurrentUser(newUserData).then(function () {
            console.log(mvIdentity.currentUser);
        }, function (err) {
            console.log(err);
        });
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
});