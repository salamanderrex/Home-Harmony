define('controllers/home.js', [], function () {
  return function controller(cp) {
    cp.register('homeController', ['$scope','$rootScope', function($scope, $rootScope) {
      //remove
      console.log('homeController says:' + $rootScope.test);

        $scope.createHomeSubmit = function() {
        console.log("create home submit happened");
          var house = {
            "name": this.home_name
          };

          $rootScope.currentHomeID = $rootScope.fireDB.child('houses').push(house);
        }
        $scope.joinHomeSubmit = function() {
        console.log("join home submit happened");
          // this.home_id
          //TODO : add to fireDB/houses/*homeid*/users
          // $rootScope.user.currentUserID = auth.uid;
          // $rootScope.user.currentUserEmail = this.usr;
          // $rootScope.user.currentPass = this.pwd;
          var user = {
            name : $rootScope.user.currentUserEmail

          }
          //Fetch the houses list from the DB
          //Iterate over them, looking for a name match
          //when the name matches, join it and enable access to other pages
          //Also update the global flags stored on the rootScope.
        }
      }]);
  }
});