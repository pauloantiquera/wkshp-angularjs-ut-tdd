(function() {
    'use strict';

    angular
        .module('Login')
        .config(['$routeProvider', function($routeProvider) {
        	$routeProvider
        		.when('/login', {
        			templateUrl: 'app/login/loginForm.html',
        			controller: 'loginController as loginCtrl'
        		});
        }])
        .constant('loginDefaultRoute', '/login');
})();