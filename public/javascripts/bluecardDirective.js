var app = angular.module('Cards');

app.directive('blueCard', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '../templates/blueCardTemplate.html'
	}
});

app.directive('cardCollection', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '../templates/blueCardCollectionTemplate.html'
	}
});