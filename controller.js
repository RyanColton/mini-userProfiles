angular.module('userProfiles').controller('MainController', function($scope, mainService) {
  $scope.getUsers = function() {
     mainService.getUsers().then(function(dataFromService) {
       $scope.users = dataFromService;
     });
   }

   $scope.getUsers();
   $scope.toggleFavorite = function(index){
    mainService.toggleFavorite(index);
   }
})
