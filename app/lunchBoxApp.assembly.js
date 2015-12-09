(function() {
    'use strict';

    angular
        .module('lunchBoxApp.assembly', [
            'Login',
            'ngRoute'
        ])
        .config(['$routeProvider', function($routeProvider) {
	    	$routeProvider
	    		.otherwise({
	    			redirectTo: '/login'
	    		});
        }]);
})();