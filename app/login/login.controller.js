(function() {
    'use strict';

    angular
        .module('Login')
        .controller('loginController', loginController);

    loginController.$inject = [
        'authService',
        '$location'
    ];

    /* @ngInject */
    function loginController(authService, $location) {
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
            $location.path('/postauthredirection');
        }
        /* *************************** */

        /* Public Methods Declaration */
        self.doLogin = function() {
            if (isAValidCredential(self.userName) && isAValidCredential(self.password)) {
                if (authService.doAuth(self.userName, self.password)) {
                    doPostAuthRedirection();
                } else {
                    throw new Error('Auth error: wrong userName or password');
                }
            } else {
                throw new Error('Invalid credentials');                
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