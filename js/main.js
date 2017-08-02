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


app.controller("FizzBuzz", function($scope) {
    $scope.currentNumber = 1;
    $scope.value = "1";

    $scope.getNext = function(){
    	var isAppended = false;
    	this.value = "";

    	if(this.currentNumber % 3 == 0)
    	{
    		isAppended = true;
    		this.value += "Fizz";
    	}
    	if(this.currentNumber % 5 == 0)
    	{
    		isAppended = true;
    		this.value += "Buzz";
    	}

    	if(!isAppended){
    		this.value = this.currentNumber;
    	}

    	this.currentNumber++;
    };

    $scope.getPrevious = function(){
    	this.currentNumber--;
    	var isAppended = false;
    	this.value = "";

    	if(this.currentNumber % 3 == 0)
    	{
    		isAppended = true;
    		this.value += "Fizz";
    	}
    	if(this.currentNumber % 5 == 0)
    	{
    		isAppended = true;
    		this.value += "Buzz";
    	}

    	if(!isAppended){
    		this.value = this.currentNumber;
    	}
    };

    $scope.reset = function(){
   		this.currentNumber = 1;
    	this.value = this.currentNumber;
    };

});

app.controller("FizzBuzz", function($scope) {

});