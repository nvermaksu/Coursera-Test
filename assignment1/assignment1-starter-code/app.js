(function(){
	'use strict'

	angular.module('lunchApp', [])
	.controller('lunchController', function($scope){
		$scope.displayMessage = "";
		
		$scope.calculate = function(){
			var x = $scope.lunchItem
			if(x == "" || x == null){ //if x is empty or null
				$scope.displayMessage = "Please enter data first.";
				return;
			}
			x = x.split(",").length; //splitting and getting length
			if(x <= 3 && x > 0){
				$scope.displayMessage = "Enjoy!";
			}
			else if(x >= 3){
				$scope.displayMessage = "Too Much!";
			}
			else{
				$scope.displayMessage = "Please enter data first.";
			}
		}

		
	});
})();