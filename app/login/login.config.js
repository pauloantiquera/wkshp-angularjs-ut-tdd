(function() {
    'use strict';

    angular
        .module('Login')
        .config(['$routeProvider', function($routeProvider) {
        	$routeProvider
        		.when('/login', {
        			templateUrl: 'app/login/loginForm.html',
        			controller: 'loginController'
        		});
        }])
        .constant('loginDefaultRoute', '/login');
})();