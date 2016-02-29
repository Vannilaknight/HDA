angular.module('app').controller('mvCardDetailCtrl', function ($scope, mvCachedCards, $routeParams) {
    mvCachedCards.query().$promise.then(function (collection) {
        collection.forEach(function (card) {
            if (card.cardId === $routeParams.id) {
                $scope.card = card;
                console.log($scope.card)
            }
        })
    })
});