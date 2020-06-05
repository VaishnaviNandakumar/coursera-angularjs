(function(){
"use strict";

angular.module('public')
.controller('CredentialsController', CredentialsController);

CredentialsController.$inject = ['credentials', 'SingleItemPath'];
function CredentialsController(credentials, SingleItemPath){
	var cred = this;
	cred.ApiPath = SingleItemPath;
	if (credentials !== "Error") {
		console.log("Ok its not an error :)");
		cred.credentials = credentials;
	}
}


})();