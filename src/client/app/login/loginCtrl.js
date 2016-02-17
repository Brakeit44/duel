angular.module('duel.loginCtrl', [])

.controller('LoginCtrl', ['$scope', '$state', '$window', 'UserFact', function($scope, $state, $window, UserFact) {
  $scope.submitForm = function() {
    //TODO: change this for auth
    UserFact.setUserName($scope.userName);

    //Signing in with email is disabled for now.  
    // analytics.identify({
    //   name: $scope.userName,
    //   method: 'Typed Username'
    // });

    $state.go('wrap.lobby');
  };
}]);
