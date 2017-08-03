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

app.controller("rockPaperScissor", function($scope) {
	$scope.userChoice = "";
	$scope.computerChoice = "";
	$scope.result = "";

	$scope.playRound = function(input){
		this.userChoice = input;
		this.getComputerMove();
		this.getResults();
	};

	$scope.getComputerMove = function(){
		var value = "";

		var temp = new Date().getMilliseconds() % 3;

		switch (temp) {
			case 0:
				value = "Rock";
			break;

			case 1:
				value = "Paper";
			break;

			case 2:
				value = "Scissor"
		}

		this.computerChoice = value;
	};

	$scope.getResults = function(){
		this.result = "";

		if(this.userChoice == this.computerChoice){
			this.result = "Tie";
		}
		else if(this.userChoice == "Rock"){
			if (this.computerChoice == "Paper") {
				this.result = "Lose";
			}
			else if(this.computerChoice == "Scissor"){
				this.result = "Win";
			}
		}
		else if(this.userChoice == "Paper"){
			if (this.computerChoice == "Scissor") {
				this.result = "Lose";
			}
			else if(this.computerChoice == "Rock"){
				this.result = "Win";
			}
		}
		else if(this.userChoice == "Scissor"){
			if (this.computerChoice == "Rock") {
				this.result = "Lose";
			}
			else if(this.computerChoice == "Paper"){
				this.result = "Win";
			}
		}
	};

});