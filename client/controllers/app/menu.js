angular.module('app').controller('app_menu', app_menu);
function app_menu($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.showDashboard = function() {
	    app.call('Home');
	    $location.path('http://hkdnte250:82/');
	};
}
