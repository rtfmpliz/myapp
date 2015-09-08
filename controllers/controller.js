var myApp = angular.module('myApp', []); 
myApp.controller('AppCtrl', ['$scope', '$http', 
	function($scope, $http) {     
		console.log("Hello World from controller"); 
var refresh = function(){
	$http.get('/kendaraan').success(function(response){
		console.log("I got the data I requested");
		$scope.kendaraan = response;

	});
};

refresh();

$scope.addMobil = function(){
	console.log($scope.mobil);
	$http.post('/kendaraan',$scope.mobil).success(function(response){
		console.log(response);
		refresh();
	});
};

$scope.remove = function(id){
	console.log(id);
	$http.delete('/kendaraan/'+ id).success(function(response){
		refresh();
	});
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/kendaraan/' + id).success(function(response) {
    $scope.mobil = response;
  });
};  

$scope.update = function() {
  console.log($scope.mobil._id);
  $http.put('/kendaraan/' + $scope.mobil._id, $scope.mobil).success(function(response) {
    refresh();
  })
};

$scope.deselect = function(){
	$scope.mobil =""
	};
	
}]);