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
        console.log("---Request Type---"+JSON.stringify($scope.data.RequestType.selected.value));
        var selectedReqTyp = JSON.stringify($scope.data.RequestType.selected.value);
        var sam = parseInt(selectedReqTyp);
        console.log("int ---->"+sam);
        switch (sam) {
            
            case 2:
                // code
                console.log("in adhoc--"+selectedReqTyp);
                $scope.dateField = true;
                $scope.fromDateField = false;
                $scope.toDateField = false;
                break;
            case 3:
                // code
                console.log("in holiday--"+selectedReqTyp);
                $scope.dateField = true;
                $scope.fromDateField = false;
                $scope.toDateField = false;
                break;
            case 4:
                // code
                console.log("in month--"+selectedReqTyp);
                $scope.dateField = false;
                $scope.fromDateField = true;
                $scope.toDateField = true;
                break;    
            default:
            console.log("in default--"+sam);
                // code
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