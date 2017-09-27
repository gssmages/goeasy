angular.module('app').controller('app_mytrips', app_mytrips);
function app_mytrips($scope, app) {
    'use strict';
    app.init($scope);
    
    
	 $scope.showMenu = function() {
	     app.go('menuleft');
	 };
}

