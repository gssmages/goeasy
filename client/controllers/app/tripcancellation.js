angular.module('app').controller('app_tripcancellation', app_tripcancellation);
function app_tripcancellation($scope, app) {
    'use strict';
    app.init($scope);
    
     $scope.tripcancel = function(){
         //console.log("---sendRequest---"+$scope.data.Date);
			 app.call('myapprovals.tripcancel',$scope.data);

		 };
}