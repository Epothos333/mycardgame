app.controller('addGreenCardController', ['$scope', '$location', '$resource', function($scope, $location, $resource){

    $scope.changeView = function(view) {
        $location.path(view);
    }

    $scope.save = function() {
        var Cards = $resource('api/cardCollection/greenCards');

        Cards.save($scope.newGreenCard, function() {
        $location.path('/');
        });
    }


}]);
