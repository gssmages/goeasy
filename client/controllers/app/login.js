angular.module('app').controller('app_login', app_login);
function app_login($scope, app,$ionicLoading) {
    'use strict';
    app.init($scope);
    
     $scope.data = {};
    var SSO1="";
    var SSO2="";
    var empid="";
    var empname="";
    var emprole="";
    var emptitle="";
    var sso="";
    
    
        $scope.login = function() {

        $scope.userName = $scope.data.username;
        $scope.pwd = $scope.data.password;
 var userName = $scope.data.username;
         var pwd = $scope.data.password;

 var basicAuthString = 'Basic ' + btoa($scope.data.username + ":" + $scope.data.password);
        //$location.url('/home');
        /*loginurl=loginurl.replace("{{username}}",($scope.data.username).toLowerCase()).replace("{{password}}",$scope.data.password);*/
        //console.log(loginurl)
        var loginurl='http://gssnte811.asia.ad.flextronics.com:4042/api/Login/CheckLoginDetailEncryption/';
        var logindata='?userName={{username}}&password={{key}}';
        logindata=logindata.replace(/{{username}}/, angular.lowercase($scope.data.username)).replace(/{{key}}/, $scope.data.password);
        //console.log(SSO1)
        if(sso===""||sso===undefined){
            console.log("user enters into the app for first time");
            $ionicLoading.show({
                template: '<ion-spinner icon="spiral"></ion-spinner>Loading...'
            }).then(function(){
                //  console.log("The loading indicator is now displayed");
            });
            
            $http({
                method: 'POST', 
                url:loginurl+logindata,
                async: true,
                crossDomain: true,
                responseType: "json",
                headers: {
                   'Content-Type': 'application/json;charset=UTF-8',
                    'Authorization': basicAuthString,
                    'Access-Control-Allow-Credentials': true
                }
            }).then(function successCallback(response) {
                console.log(response);
                $ionicLoading.hide().then(function(){
                    //  console.log("The loading indicator is now hidden");
                });
                responseInLogin= response.data.result;
                loginAuth = responseInLogin.login;                 
                if(loginAuth =="success"){
                    SSO1= responseInLogin.sso1;
                    SSO2= responseInLogin.sso2;
                    empid=responseInLogin.e_id;
                    empname=responseInLogin.e_name;
                    emprole=responseInLogin.e_role;
                    emptitle=responseInLogin.e_title;
                    sso=responseInLogin.sso;
                    addToLocalStorage("empid",empid);
                    addToLocalStorage("empname",empname);
                    addToLocalStorage("emprole",emprole);
                    addToLocalStorage("emptitle",emptitle);
                    addToLocalStorage("sso",sso);
                    addToLocalStorage("sso1",SSO1);	addToLocalStorage("sso2",SSO2);
                    $('#usrname').html(getItem('empname'));
                    $('#usrtitle').html(getItem('emptitle'));
                    $location.url('/home');
                }else{
                    $location.url('/login'); 
                    loginFailed();
                    $ionicLoading.hide().then(function(){
                        console.log("The loading indicator is now hidden");
                    });
                }
            }, function errorCallback(response) {
                console.log("error in ajax");
                $ionicLoading.hide().then(function(){
                    console.log("The loading indicator is now hidden");
                });
            });
        }else{

            /*    $http({
              method: 'GET', url:'http://gssnte813.asia.ad.flextronics.com/transport/controller/transport.php?action=login&user_id='+encodeURIComponent(SSO1)+'&pwd='+encodeURIComponent(SSO2)+'&sso=Y'

            }).then(function successCallback(response) {
                responseInLogin= response.data.result;
                loginAuth = responseInLogin.login;
                SSO1= responseInLogin.sso1;
                SSO2= responseInLogin.sso2;
                if(loginAuth =="success"){
                    $location.url('/home');
                }else{
                   $location.url('/login'); 
                    loginFailed();
                }
                userAuthendication();
            }, function errorCallback(response) {

            });*/
        }

        function loginFailed(){
            $scope.data.username = "";
            $scope.data.password ="";
            alert("Enter valid UserName and Password");
        }
        function userAuthendication(){
            console.log("auth id's! "+SSO1);
        }

    };
    $scope.open = function() {
        $state.go('home', {});
    };
    /*$scope.$on('$ionicView.beforeEnter', function () {
        sso=getItem('sso');
        SSO1=getItem('sso1');
        SSO2=getItem('sso2');
        console.log(sso);
        if(sso!==null){
            $ionicLoading.show({
                template: '<ion-spinner icon="spiral"></ion-spinner>Loading...'
            }).then(function(){
                console.log("The loading indicator is now displayed");
            });
            $http({
                method: 'GET', url:'http://gssnte813.asia.ad.flextronics.com/transport/controller/transport.php?action=login&user_id='+encodeURIComponent(SSO1)+'&pwd='+encodeURIComponent(SSO2)+'&sso=Y'

            }).then(function successCallback(response) {
                $ionicLoading.hide().then(function(){
                    console.log("The loading indicator is now hidden");
                });
                responseInLogin= response.data.result;
                loginAuth = responseInLogin.login;
                SSO1= responseInLogin.sso1;
                SSO2= responseInLogin.sso2;
                empid=responseInLogin.e_id;
                empname=responseInLogin.e_name;
                emprole=responseInLogin.e_role;
                emptitle=responseInLogin.e_title;
                sso=responseInLogin.sso;
                addToLocalStorage("empid",empid);
                addToLocalStorage("empname",empname);
                addToLocalStorage("emprole",emprole);
                addToLocalStorage("emptitle",emptitle);
                addToLocalStorage("sso",sso);
                addToLocalStorage("sso1",SSO1);	addToLocalStorage("sso2",SSO2);
                $('#usrname').html(empname);
                $('#usrtitle').html(emptitle);
                $location.url('/home');
                if(loginAuth =="success"){
                    $location.url('/home');
                }else{
                    $location.url('/login'); 
                    loginFailed();
                }

            }, function errorCallback(response) {
                loginFailed();
                $ionicLoading.hide().then(function(){
                    console.log("The loading indicator is now hidden");
                });
            });
           
        }
        else
        {
            $scope.data.username = "";
            $scope.data.password ="";

        }
 function loginFailed(){
                $scope.data.username = "";
                $scope.data.password ="";
            }

    });*/
  //  $ionicSideMenuDelegate.canDragContent(false);
}