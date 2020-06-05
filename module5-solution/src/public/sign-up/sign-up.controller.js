(function(){
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController)
.constant('SingleItemPath', "https://res-backend.herokuapp.com/");

SignUpController.$inject = ['$http', 'SingleItemPath', 'CredentialsService'];
function SignUpController($http, SingleItemPath, CredentialsService){
	var signup = this;
	signup.serverError;
	signup.flag = 0;

	signup.submit = function () {
		
		var response = $http({
			method: "GET",
			url: (SingleItemPath + "menu_items/" + signup.short_name + ".json")
		});

		console.log(response);
		console.log(signup.fName, signup.lName);
		response.then(function(response1){
			console.log("Response: ",response1);
			if (response1.status === 200) {
				CredentialsService.favMenuItem = response1.data;
				CredentialsService.fName = signup.fName;
				CredentialsService.lName = signup.lName;
				CredentialsService.email = signup.email;
				CredentialsService.phoneNum = signup.phoneNum;	
				
				console.log("All copied to the service");
				signup.flag = 1;
			}
			
		})
		.catch(function(error){
			console.log("Error: ",error);
			if(error.status === 500){
				signup.serverError = "No such menu number exists";
			}
		});

	};
}


})();