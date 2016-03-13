angular.module('app').controller('mvProfileCtrl', function ($scope, mvAuth, mvIdentity, mvNotifier) {
    console.log(mvIdentity.currentUser);

    $scope.email = mvIdentity.currentUser.username;
    $scope.fname = mvIdentity.currentUser.firstName;
    $scope.lname = mvIdentity.currentUser.lastName;

    $scope.update = function () {
        var newUserData = {
            username: $scope.email,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        if ($scope.password && $scope.password.length > 0) {
            newUserData.password = $scope.password;
        }

        mvAuth.updateCurrentUser(newUserData).then(function () {
            mvNotifier.notify('Account Updated!');
        }, function (reason) {
            mvNotifier.error(reason);
        })
    }
});