myApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: "partials/login.html"
    })
    .when('/dashboard', {
      templateUrl: "partials/dashboard.html"
    })
    .when('/week5', {
      templateUrl: "partials/week5.html"
    })
    .otherwise({
      redirectTo: '/'
    })
})
