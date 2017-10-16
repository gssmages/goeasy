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
        // switch (selectedReqTyp) {
            
        //     case "2":
        //         // code
        //         console.log("in adhoc--"+selectedReqTyp);
        //         $scope.dateField = true;
        //         $scope.fromDateField = false;
        //         $scope.toDateField = false;
        //         break;
        //     case "3":
        //         // code
        //         console.log("in holiday--"+selectedReqTyp);
        //         $scope.dateField = true;
        //         $scope.fromDateField = false;
        //         $scope.toDateField = false;
        //         break;
        //     case "4":
        //         // code
        //         console.log("in month--"+selectedReqTyp);
        //         $scope.dateField = false;
        //         $scope.fromDateField = true;
        //         $scope.toDateField = true;
        //         break;    
        //     default:
        //       console.log("in default--"+selectedReqTyp);
        //         break;
        // }
        
        if(selectedReqTyp == "4"){
            console.log(" in if "+selectedReqTyp);
            $scope.dateField = false;
                $scope.fromDateField = true;
                $scope.toDateField = true;
        }else{
            console.log(" in else-- "+(selectedReqTyp));
            $scope.dateField = true;
                $scope.fromDateField = false;
                $scope.toDateField = false;
        }
    }    
    $scope.submitApprovals = function(){
         //console.log("---sendRequest---");
			 app.call('myapprovals.sendRequest', $scope.data);

		 };
    });
}