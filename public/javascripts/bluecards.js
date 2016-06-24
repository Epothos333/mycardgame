var app = angular.module('Cards', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'blueCardController'
        })
        .when('/add-cards', {
            templateUrl: 'partials/blue-card-form.html',
            controller: 'addBlueCardController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.controller('blueCardController', ['$scope', '$resource', function($scope, $resource) {
	var Cards = $resource('/api/blueCardCollection');
	Cards.query(function(bluecards) {
		$scope.bluecards = bluecards;
	});
}]);

app.controller('addBlueCardController', ['$scope', '$location', '$resource', function($scope, $location, $resource) {
    $scope.changeView = function(view) {
        $location.path(view);
    }

    $scope.save = function() {
        var Cards = $resource('api/blueCardCollection');

        Cards.save($scope.newCard, function() {
        $location.path('/');
        });
    }

}]);