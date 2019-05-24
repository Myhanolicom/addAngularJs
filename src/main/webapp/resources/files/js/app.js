var app = angular.module('app',['ngRoute','ngResource']);

app.config(function ($routeProvider){
	
	$routeProvider.when('/pagina1',{
		
		templateUrl: "resources/files/views/pagina1.html"
	});
	
	$routeProvider.otherwise({
		
		redirectTo:'/'
		
	});
	
});
