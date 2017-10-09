angular.module('app').controller('app_menu', app_menu);
function app_menu($scope,$location,$window, app) {
    'use strict';
    app.init($scope);
    
    $scope.showDashboard = function() {
	    /*app.call('app.home');*/
	    $window.location.href = 'http://hkdnte250:82/';
	    /*$location.path('http://hkdnte250:82/');
	};
}
