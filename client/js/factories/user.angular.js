myApp.factory('UserFactory', function($http){
  var factory = {};
  var sessionUser = {loggedIn: false};

  factory.getSessionUser = function(callback){
    callback(sessionUser);
  };

  factory.register = function(newUserInfo, callback){
    $http.post('/register', newUserInfo).success(function(response){
      if (response.status){
        sessionUser = response.sessionUser;
      }
      callback(response);
    })
  };

  factory.logout = function(callback){
    $http.get('/logout').success(function(response){
      if(response.status){
        sessionUser = response.sessionUser;
      }
      callback(response);
    })
  };

  factory.login = function(userInfo, callback){
    $http.post('/login', userInfo).success(function(response){
      if(response.status){
        console.log(response.sessionUser);
        sessionUser = response.sessionUser
      }
      callback(response);
    })
  }
  return factory;
})
