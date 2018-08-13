var app=angular.module("myapp",[]);
app.controller("myController",['$scope', function($scope){
	$scope.userObj = {};
	$scope.check=function(user){
		$scope.userObj=angular.copy(user);
		alert(JSON.stringify($scope.userObj));
          }
	alert("uuuuu")

}]);