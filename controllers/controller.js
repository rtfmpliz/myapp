var myApp = angular.module('myApp', []); 
myApp.controller('AppCtrl', ['$scope', '$http', 
	function($scope, $http) {     
		//console.log("Hello World from controller"); 
var refresh = function(){
	$http.get('/pelamar').success(function(response){
		//console.log("I got the data I requested");
		$scope.pelamar = response;

	});
};

refresh();

$scope.addcalon = function(){
	console.log($scope.calon);
	$http.post('/pelamar',$scope.calon).success(function(response){
		//console.log(response);
		refresh();
	});
};

$scope.remove = function(id){
	//console.log(id);
	$http.delete('/pelamar/'+ id).success(function(response){
		refresh();
	});
};

$scope.edit = function(id) {
  //console.log(id);
  $http.get('/pelamar/' + id).success(function(response) {
    $scope.calon = response;
  });
};  

$scope.update = function() {
  //console.log($scope.calon._id);
  $http.put('/pelamar/' + $scope.calon._id, $scope.calon).success(function(response) {
    refresh();
  })
};

$scope.deselect = function(){
	$scope.calon =""
	};
        
        $scope.sushi = [
            { name: 'Cali Roll', fish: 'Crab', tastiness: 2 },
            { name: 'Philly', fish: 'Tuna', tastiness: 4 },
            { name: 'Tiger', fish: 'Eel', tastiness: 7 },
            { name: 'Rainbow', fish: 'Variety', tastiness: 6 }
        ];
	
}]);

// app.js
angular.module('sortApp', [])

    .controller('mainController', function($scope) {
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchFish   = '';     // set the default search/filter term

    // create the list of sushi rolls 


});