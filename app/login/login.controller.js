(function() {
    'use strict';

    angular
        .module('Login')
        .controller('loginController', loginController);

    loginController.$inject = [
        'authService',
        '$location',
        'messagingService', 
        'postAuthRedirectionRoute'
    ];

    /* @ngInject */
    function loginController(authService, $location, messagingService, postAuthRedirectionRoute) {
        /* Private Attributes Declaration */
        var self = this;
        /* ****************************** */

        /* Public Attributes Declaration */
        self.title = 'Access to LunchBox App';
        self.userName = '';
        self.password = '';
        /* ***************************** */

        /* Private Methods Declaration */
        function isAValidCredential(credential) {
            return angular.isString(credential) && credential !== ''
        }

        function doPostAuthRedirection() {
            $location.path(postAuthRedirectionRoute);
        }
        /* *************************** */

        /* Public Methods Declaration */
        self.doLogin = function() {
            if (isAValidCredential(self.userName) && isAValidCredential(self.password)) {
                if (authService.doAuth(self.userName, self.password)) {
                    doPostAuthRedirection();
                } else {
                    messagingService.sendErrorMessage('Wrong userName or password.');
                }
            } else {
                messagingService.sendErrorMessage('Invalid credentials.');
            }
        };
        /* ************************** */

        /* Init */
        function initController() {
        }

        initController();
        /* **** */
    }
})();