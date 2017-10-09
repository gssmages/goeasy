angular.module('app').controller('app_menu', app_menu);
function app_menu($scope,$location,$window, app) {
    'use strict';
    app.init($scope);
    
    $scope.showDashboard = function() {
        /*app.go('app.home');
        $location.path('http://hkdnte250:82/');
	    /*app.call('app.home');*/
	  app.action("Home.home");
	   /* $window.location.href = 'http://hkdnte250:82/';
       /* app.call('Home.showDashboard',{'index':index});*/
    
	};
}
