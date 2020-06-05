(function(){
"use strict"

angular.module('public')
.service('CredentialsService', CredentialsService);

function CredentialsService () {
	var service = this;
	service.fName;
	service.lName;
	service.email;
	service.phoneNum;
	service.favMenuItem;
	service.credentials = [];

	service.getCredentials = function () {
		if (service.fName && service.lName && service.email && service.phoneNum && service.favMenuItem ) {

			service.credentials.push(service.fName);
			service.credentials.push(service.lName);
			service.credentials.push(service.email);
			service.credentials.push(service.phoneNum);
			service.credentials.push(service.favMenuItem);
			service.credentials.push(service.image);
			console.log(service.credentials);

			return service.credentials;
		}else{
			console.log("getCredentials failed!");
			return "Error";
		}
		
	};

	service.$onInit = function () {
		console.log("wassup baybe");
	};
}	


})();