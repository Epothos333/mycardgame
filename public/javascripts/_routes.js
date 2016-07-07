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
