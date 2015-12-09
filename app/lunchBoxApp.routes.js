(function() {
    'use strict';

    angular
        .module('lunchBoxApp.routes', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
        	$routeProvider
        		.when('/about', {
        			templateUrl: 'aboutPage.html',
        		})
        		.when('/contact', {
        			templateUrl: 'contactPage.html',	
        		});
        }]);
})();