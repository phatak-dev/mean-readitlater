var rilApp = angular.module('readitlaterapp', []);
rilApp.controller('UrlListCtrl', function ($scope,$http) {
	var getUrl = 'http://localhost:8080/api/urls'
	var updateUrl = 'http://localhost:8080/api/update'

	$http.get(getUrl).then(function(r){    	          
		$scope.urlArrayJson = r.data;
	});  

	$scope.update = function(urlJson) {      
	  urlJson.read = true;
	  $http.post(updateUrl,urlJson).then(function(r){
        console.log(r);
	  });	  
	};
});


