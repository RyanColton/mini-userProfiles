angular.module('userProfiles').service('mainService', function($http) {
  var data;
  this.getUsers = function() {
    return $http({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=1'
    }).then(function(response){
      data = response.data.data;
      return response;
    })
  }

this.toggleFavorite = function(index){
  console.log("this.data", data)
  data[index - 1].isfavorite = !data[index - 1].isfavorite;
}
})
