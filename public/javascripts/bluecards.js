var app = angular.module('Cards', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'BlueCardController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.controller('BlueCardController', ['$scope', '$resource', function($scope, $resource) {
	var Cards = $resource('/api/getBlueCards');
	Cards.query(function(bluecards) {
		$scope.bluecards = bluecards;
	});
}]);