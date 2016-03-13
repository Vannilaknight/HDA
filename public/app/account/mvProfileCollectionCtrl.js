angular.module('app').controller('mvProfileCollectionCtrl', function ($scope, mvAuth, mvIdentity, mvNotifier) {
    console.log('work pls')
    $scope.cardCollection = mvIdentity.currentUser.cardCollection;
    console.log(mvIdentity.currentUser)
});