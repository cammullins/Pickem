myApp.controller('DashboardController', function($scope, $location, UserFactory){

  $scope.sessionuser;
  $scope.errors = [];

  UserFactory.getSessionUser(function(user_info){
    $scope.sessionUser = user_info;
    if(!$scope.sessionUser.loggedIn){
      $location.url('/');
    }
  })

  $scope.logout = function(){
    UserFactory.logout(function(response){
      if (response.status){
        $scope.sessionUser = response.sessionUser;
        $location.url('/');
      }else{
        $scope.errors.push(response.errors);
      }
    })
  }

})
