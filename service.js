angular.module('weatherHelpApp')
.service('svc', function($http) {
  this.getWeather = function(zip) {
    return $http({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&units=imperial&APPID=1872758bc95c7ca674c04790a1c4508b'
    }).then(function(response) {
      if (response.status === 200) {
        return response.data;
        console.log(response.data);
      }
      else {
        return "error"
      }
    })
  }
})
