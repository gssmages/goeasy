angular.module('app').controller('app_adhocrequest', app_adhocrequest);
function app_adhocrequest($scope, app) {
    'use strict';
    app.init($scope);
    
     $scope.showMenu = function() {
	     app.go('menuleft');
	 };
}