var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
    $scope.distance = -1;
    $scope.gravity = 9.8;
    $scope.time = 8;
    $scope.calculateDistance = function($scope){
    	this.distance = .5 * this.gravity * this.time * this.time;
    };
    $scope.calculateTime = function($scope){
    	this.time = Math.sqrt(2 * this.distance / this.gravity);
    };
    $scope.calculateGravity = function($scope){
    	this.gravity = 2 * this.distance / this.time / this.time;
    };

});


