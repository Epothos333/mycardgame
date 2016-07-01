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
        .when('/blueCardCollection/:id', {
            templateUrl: 'partials/blue-card-form.html',
            controller: 'getBlueCardController'
        })
        .when('/blueCardCollection/delete/:id', {
            templateUrl: 'partials/delete-card.html',
            controller: 'deleteBlueCardController'
        })
        .when('/add-green-cards', {
            templateUrl: 'partials/green-card-form.html',
            controller: 'addGreenCardController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.controller('blueCardController', ['$scope', '$resource', function($scope, $resource) {
	var Cards = $resource('/api/cardCollection/blueCards');
	Cards.query(function(bluecards) {
		$scope.bluecards = bluecards;
	});
}]);

app.controller('getBlueCardController', ['$scope', '$location', '$resource', '$routeParams', function($scope, $location, $resource, $routeParams) {

    $scope.changeView = function(view) {
        $location.path(view);
    }

    var Cards = $resource('/api/cardCollection/blueCards/:id', { id: '@_id' }, {
        update: { method: 'PUT' }
    });

    Cards.get({ id: $routeParams.id }, function(blueCards) {
        $scope.newCard = blueCards;
    });

    $scope.save = function() {
        Cards.update($scope.newCard, function() {
        $location.path('/');
        });
    }
}]);

app.controller('addBlueCardController', ['$scope', '$location', '$resource', function($scope, $location, $resource) {
    $scope.changeView = function(view) {
        $location.path(view);
    }

    $scope.save = function() {
        var Cards = $resource('api/cardCollection/blueCards');

        Cards.save($scope.newCard, function() {
        $location.path('/');
        });
    }

}]);

app.controller('deleteBlueCardController', ['$scope', '$location', '$resource', '$routeParams', function($scope, $location, $resource, $routeParams) {

    var Cards = $resource('api/cardCollection/blueCards/:id');

    Cards.get({ id: $routeParams.id}, function(card) {
        $scope.cardToDelete = card
    })

    $scope.delete = function() {
        Cards.delete({ id: $routeParams.id}, function(card) {
            $location.path('/');
        })
    }

}]);









