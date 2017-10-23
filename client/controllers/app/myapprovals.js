angular.module('app').controller('app_myapprovals', app_myapprovals).directive("approvallist",function($ionicGesture,$rootScope) {
    return {
      scope: {},
      restrict: "A",
      link: function(scope, elem, attrs) {
	elem.css('border-top','5px solid #ccc');
          // onHold => start select box by `onHold` => working good
        /*  $ionicGesture.on('hold', function() {
            elem.addClass("selected");
             elem.css('border-top','5px solid #000');
            $rootScope.startSelect = true; // to enable select box by click
          }, elem);*/

					$ionicGesture.on('tap', function() {
          	if (true) {
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
    $scope.selectbox = function(idvalue,elem) {
      // console.log(idvalue);
       var index = 0;
       angular.forEach($scope.data.listItems, function (value) {
        // console.log($scope.data.listItems);
           if(index===idvalue)
           {
               
               if($scope.data.listItems[index].isselect=== true)
               {
                   $scope.data.listItems[index].isselect=false;
               }
               else
               {
               $scope.data.listItems[index].isselect=true;
               }
               }
               else
               {
                   if($scope.data.listItems[index].isselect=== true)
               {
                   $scope.data.listItems[index].isselect=true;
               }
               else
               {
               $scope.data.listItems[index].isselect=false;
               }
               }
               index=index+1;
           }); 
//	console.log($scope.data.listItems);
};
           
    $scope.selectionall = function() {
		$(".card").each(function($index){
			if($(this).find(".approvallist").not("selected"))
				{	
					$(this).find(".approvallist").addClass("selected").css('border-top','5px solid #000');
					$scope.data.listItems[$index].isselect=true;
				}
		});
	};
	$scope.clearselection = function() {
		$(".card").each(function($index){
			if($(this).find(".approvallist").hasClass("selected"))
				{
					$(this).find(".approvallist").removeClass("selected").css('border-top','5px solid #ddd');
					$scope.data.listItems[$index].isselect=false;
				}
		});
	};
	
	 /*$scope.showMenu = function() {
	     app.go('menuleft');
	 };*/
	  $scope.submitApprovals = function(){
			 app.call('myapprovals.approve', $scope.data);

		 };
	 	$scope.requesttype = function(type) {
/*	$scope.listarray = [];*/
	/*	$(".card").each(function($index){
			if($(this).find(".approvallist").hasClass("selected"))
				{
					$scope.listarray.push($index);
					$scope.data.listItems[$index].isselect=true;
				}
				else
				{
				    $scope.data.listItems[$index].isselect=false;
				}
		});*/
	/*	if($scope.listarray.length>0)
			{*/
			
		if(type=="approve")
			{
				//$scope.reqtype="2";
			//	console.log($scope.listarray);
					console.log($scope.data.listItems);
				app.action('myapprovals', 'approve', this);
				//app.call('alertwin');
			}
		else if(type=="reject")
			{
				//$scope.reqtype="3";
//console.log($scope.listarray);
					console.log($scope.data.listItems);
				app.action('myapprovals', 'reject', this);
				//app.call('alertwin');
			}
		
		/*	}*/
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