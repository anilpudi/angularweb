(function(){

    function headerctrl($scope){
        $scope.headerurl="header/headernavbar.html";
        $scope.logipage=function(){
          $scope.loginurl="login/register.html";
                                  }
        $scope.registerpage=function(){
           $scope.regiserurl="register/register.html";
                                      }
    }
    angular.module("header").controller("headerctrl",headerctrl);
})();
