(function() {
    'use strict';

    angular
        .module('Auth')
        .constant('staticUserName', 'userName')
        .constant('staticPassword', 'password')
        .service('authService', authService);

    authService.$inject = [
    	'staticUserName',
    	'staticPassword'
    ];

    /* @ngInject */
    function authService(
    	staticUserName, 
		staticPassword
    ) {
        this.doAuth = doAuth;

        ////////////////

        function doAuth(userName, password) {
        	return userName === staticUserName && password === staticPassword;
        }
    }
})();