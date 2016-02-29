angular.module('app').factory('mvCachedCards', function (mvCard) {
    var cardList;

    return {
        query: function () {
            if (!cardList) {
                cardList = mvCard.query();
            }

            return cardList;
        }
    }
});
