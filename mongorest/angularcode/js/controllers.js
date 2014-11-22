var rilApp = angular.module('readitlaterapp', []);
rilApp.controller('UrlListCtrl',['$scope', '$http', function ($scope, $http) {
	var getUrl = 'http://localhost:8080/api/unread';
	var updateUrl = 'http://localhost:8080/api/update';

	$http.get(getUrl).then(function(r){    	          
		$scope.urlArrayJson = r.data;
	});  

	$scope.update = function(urlJson) {      
	  urlJson.read = true;
	  $http.post(updateUrl,urlJson).then(function(r){
         console.log(r);
        
	  });
	  //remove read link from the array	  	 
	  $scope.urlArrayJson.splice($scope.urlArrayJson.
	  	indexOf(urlJson),1);
	};
}]);


