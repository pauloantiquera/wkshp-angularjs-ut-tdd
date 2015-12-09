(function() {
    'use strict';

    angular
        .module('lunchBoxApp.assembly', [
            'Login',
            'DailyProduction',            
            'ngRoute'
        ])
        .config(['$routeProvider', 'loginDefaultRoute', function($routeProvider, loginDefaultRoute) {            
	    	$routeProvider
	    		.otherwise({
	    			redirectTo: loginDefaultRoute
	    		});
        }]);
})();