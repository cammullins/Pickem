myApp.controller('loginController', function($scope, $location, UserFactory){

  UserFactory.getSessionUser(function(user_info){
    $scope.sessionUser = user_info;
    if(!$scope.sessionUser.loggedIn){
      $location.url('/');
    }
  });

  $scope.register = function(){
    $scope.errors = [];
    UserFactory.register($scope.registerUser, function(response){
      if (!response.status){
        $scope.errors.push(response.errors);
      }else{
        $location.url('/dashboard');
      }
    })
  };

  $scope.login = function(){
    $scope.loginerrors = [];
    UserFactory.login($scope.loginUser, function(response){
      if (!response.status){
        $scope.loginerrors.push(response.errors);
      }else{
        $location.url('/dashboard');
      }
    })
  }


})
