var app = angular.module("app",["ngMaterial","ngRoute"])
  .config(function($mdThemingProvider, $routeProvider){

    $mdThemingProvider.theme('default')
      .primaryPalette('deep-purple')
      .accentPalette('amber');

    $routeProvider
      .when("/",{
        templateUrl:"app/views/login.html",
        controller:"LoginController"
      });

});
