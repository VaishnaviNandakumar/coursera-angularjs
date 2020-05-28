(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
    $scope.name = "";
    $scope.text = "";
    $scope.checkQuantity = function(){
      var str = $scope.name;
      if (str == ""){
        $scope.text = "Please enter data first";
      }
      else{
        var new_text = str.split(",");
        var count = new_text.length;
        if(count<=3){
          $scope.text = "Enjoy!";
        }
        else{
          $scope.text = "Too Much!";
        }
       
      }
    }
  };
    
    
    })();