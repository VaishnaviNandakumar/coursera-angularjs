(function () {
    'use strict';
    
    
    
    var shoppingList1 = [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "Chocolate",
        quantity: "5"
      }
    ];

    var shoppingList2 = [
      {

      }
    ]
    angular.module('ShoppingList', [])
    .controller('ShoppingListController', ShoppingListController);
    
    ShoppingListController.$inject = ['$scope'];
    function ShoppingListController($scope) {
      $scope.name = "";
      $scope.quantity = "";

      $scope.shoppingList1 = shoppingList1;
      $scope.shoppingList2 = shoppingList2;

      $scope.removeFromList = function(item){
      console.log(item);
     
      var newItem = {
        name: item.name,
        quantity:  item.quantity,
      };
      $scope.shoppingList2.push(newItem);
      $scope.shoppingList1.splice(0,1);
      }
  };
    
    
    })();