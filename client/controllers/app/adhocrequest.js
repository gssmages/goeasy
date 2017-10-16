angular.module('app').controller('app_adhocrequest', app_adhocrequest);
function app_adhocrequest($scope, app) {
    'use strict';
    app.init($scope, function () {
        console.log("data objects ", $scope.data);
        $scope.dateField = false;
        $scope.fromDateField = false;
        $scope.toDateField = false;
         //document.querySelectorAll('#row.2').hide();
    $scope.typeChange = function(){
        console.log("---Request Type---"+JSON.stringify($scope.data.RequestType.selected.label));
        var selectedReqTyp = JSON.stringify($scope.data.RequestType.selected.label);
        if(selectedReqTyp === "Month end"){
            console.log("in mont end");
            $scope.dateField = false;
            $scope.fromDateField = true;
            $scope.toDateField = true;
        }else{
            console.log("in adhoc");
            $scope.dateField = true;
            $scope.fromDateField = false;
            $scope.toDateField = false;
        }
    }    
    $scope.submitApprovals = function(){
         //console.log("---sendRequest---");
			 app.call('myapprovals.sendRequest', $scope.data);

		 };
       /* if ($scope.data.RequestType) {
            $scope.RequestType = $scope.data.RequestType.options;
        }
        if ($scope.data.RequestFor) {
            $scope.RequestFor = $scope.data.RequestFor.options;
        }*/
    });
}