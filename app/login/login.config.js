(function() {
    'use strict';

    angular
        .module('Login')
        .config(['$stateProvider', function($stateProvider) {
        	$stateProvider
        		.state('login', {
                    url: '/login',
        			templateUrl: 'app/login/loginForm.html',
        			controller: 'loginController as loginCtrl'
        		});
        }])
        .constant('loginDefaultRoute', '/login');
})();