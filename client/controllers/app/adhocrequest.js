angular.module('app').controller('app_adhocrequest', app_adhocrequest);
function app_adhocrequest($scope, app) {
    'use strict';
    app.init($scope, function () {
        if ($scope.data.RequestType) {
            $scope.RequestType = $scope.data.RequestType.options;
        }
        if ($scope.data.RequestFor) {
            $scope.RequestFor = $scope.data.RequestFor.options;
        }
    });
}