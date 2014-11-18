var rilApp = angular.module('readitlaterapp', []);

rilApp.controller('UrlListCtrl', function ($scope,$http) {
	var url = 'http://localhost:8080/api/urls'
	$http.get(url).then(function(r){    	          
		$scope.urls = r.data.map(function(json){ return json.url});
	});  
});


