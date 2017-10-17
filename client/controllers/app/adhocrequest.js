angular.module('app').controller('app_adhocrequest', app_adhocrequest);
function app_adhocrequest($scope, app) {
    'use strict';
    app.init($scope, function () {
        console.log("data objects ", $scope.data);
        $scope.dateField = false;
        $scope.fromDateField = false;
        $scope.toDateField = false;
         
    $scope.typeChange = function(){
        console.log("---Request Type---"+JSON.stringify($scope.data.RequestType.selected.label));
        var selectedReqTyp = $scope.data.RequestType.selected.value;
        switch (selectedReqTyp) {
            
            case "2":
                $scope.dateField = true;
                $scope.fromDateField = false;
                $scope.toDateField = false;
                break;
                
            case "3":
                $scope.dateField = true;
                $scope.fromDateField = false;
                $scope.toDateField = false;
                break;
                
            case "4":
                $scope.dateField = false;
                $scope.fromDateField = true;
                $scope.toDateField = true;
                break;
                
            default:
              console.log("in default--"+selectedReqTyp);
              $scope.dateField = false;
              $scope.fromDateField = false;
              $scope.toDateField = false;
            break;
            
        }
        
        // if(selectedReqTyp == "4"){
        //     console.log(" in if "+selectedReqTyp);
        //     $scope.dateField = false;
        //         $scope.fromDateField = true;
        //         $scope.toDateField = true;
        // }else{
        //     console.log(" in else-- "+(selectedReqTyp));
        //     $scope.dateField = true;
        //         $scope.fromDateField = false;
        //         $scope.toDateField = false;
        // }
    }    
    $scope.submitApprovals = function(){
         console.log("---sendRequest---"+$scope.data.Date);
			 app.call('myapprovals.sendRequest', $scope.data);

		 };
    });
}