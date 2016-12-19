angular.module('weatherHelpApp')
.controller('mainCtrl', function($scope, svc) {
  $scope.default = true;
  $scope.jacksonville = false;

  $scope.retrieveWeather = function(zip) {
    if (zip == 62650) {
      $scope.default = false;
      $scope.jacksonville = true;
    }
    else {
      $scope.default = true;
      $scope.jacksonville = false;
    }
    svc.getWeather(zip).then(function(weather) {
      $scope.weather = weather;
      $scope.zip = zip;
      console.log(weather);

    })
  }
})
