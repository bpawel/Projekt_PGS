angular.module('app.controllers', []).controller('UserListController', function($scope, $state, popupService, $window, User) {
  $scope.users = User.query(); //Get all users.

  $scope.deleteUser = function(user) { // Delete User.
    if (popupService.showPopup('Czy chcesz usunąć tego użytkownika?')) {
      user.$delete(function() {
        $scope.users = User.query();
        $state.go('users');
      });
    }
  };
}).controller('UserViewController', function($scope, $stateParams, User) {
  $scope.user = User.get({ id: $stateParams.id }); //Get user.
}).controller('UserCreateController', function($scope, $state, $stateParams, User) {
  $scope.user = new User();  //create user.

  $scope.addUser = function() { //create user
    $scope.user.$save(function() {
      $state.go('users'); //go back to the list with users.
    });
  };
}).controller('UserEditController', function($scope, $state, $stateParams, User) {
  $scope.updateUser = function() { //Update user.
    $scope.user.$update(function() {
      $state.go('users'); // go back to the list with users.
    });
  };

  $scope.loadUser = function() { // load users.
    $scope.user = User.get({ id: $stateParams.id });
  };

  $scope.loadUser(); // Load user which can be edited
});
