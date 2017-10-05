angular.module('app').controller('app_home', app_home);
function app_home($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.showdiv = function(data) {
            $scope.showA = true;
        $scope.showB = false;
    
        $scope.add = function() {
            $scope.showA = false;
            $scope.showB = true;
        };
    };
}