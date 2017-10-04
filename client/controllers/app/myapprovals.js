angular.module('app').controller('app_myapprovals', app_myapprovals).directive("approvallist",function($ionicGesture,$rootScope) {
    return {
      scope: {},
      restrict: "A",
      link: function(scope, elem, attrs) {
	elem.css('border-top','5px solid #ccc');
          // onHold => start select box by `onHold` => working good
          $ionicGesture.on('hold', function() {
            elem.addClass("selected");
             elem.css('border-top','5px solid #000');
            $rootScope.startSelect = true; // to enable select box by click
          }, elem);

					$ionicGesture.on('tap', function() {
          	if ($rootScope.startSelect) {
           		if (elem.hasClass('selected')) {
              	elem.removeClass('selected');
              	elem.css('border-top','5px solid #eee');
              } else {
              	elem.addClass('selected');
              	elem.css('border-top','5px solid #000');
              }
            }
          }, elem);

        } // link function

    } // return
  }
); // directive
function app_myapprovals($scope, app) {
    'use strict';
    app.init($scope);
    	$(".card").each(function($index){
            $scope.data.listItems[$index].isselect=false;
    	});
    $scope.selectionall = function() {
		$(".card").each(function(){
			if($(this).find(".approvallist").not("selected"))
				{	
					$(this).find(".approvallist").addClass("selected").css('border-top','5px solid #000');
				}
		});
	};
	$scope.clearselection = function() {
		$(".card").each(function(){
			if($(this).find(".approvallist").hasClass("selected"))
				{
					$(this).find(".approvallist").removeClass("selected").css('border-top','5px solid #ddd');
				}
		});
	};
	
	 /*$scope.showMenu = function() {
	     app.go('menuleft');
	 };*/
	 	$scope.requesttype = function(type) {
		$scope.listarray = [];
		$(".card").each(function($index){
			if($(this).find(".approvallist").hasClass("selected"))
				{
					$scope.listarray.push($index);
					$scope.data.listItems[$index].isselect=true;
				
				}
				else
				{
				    $scope.data.listItems[$index].isselect=false;
				}
		});
		if($scope.listarray.length>0)
			{
			
		if(type=="approve")
			{
				//$scope.reqtype="2";
				console.log($scope.listarray);
					console.log($scope.data.listItems);
				app.action('myapprovals', 'approve', this);
				app.go('alertwin');
			}
		else if(type=="reject")
			{
				//$scope.reqtype="3";
				console.log($scope.listarray);
					console.log($scope.data.listItems);
				app.action('myapprovals', 'reject', this);
				app.go('alertwin');
			}
		
			}
			};	
    /*$scope.setstyle=function(){
    if(angular.element(document.querySelectorAll("[approvallist]")).hasClass("selected"))
    {
        $scope.myColor="5px solid #000";
    }
    else
    {
        $scope.myColor="5px solid #999";
    }
    }
    */
}