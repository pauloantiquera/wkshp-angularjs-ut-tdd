(function() {
    'use strict';

    angular
        .module('Login')
        .controller('loginController', loginController);

    loginController.$inject = [
        'authService'
    ];

    /* @ngInject */
    function loginController(authService) {
        /* Private Attributes Declaration */
        var self = this;
        /* ****************************** */

        /* Public Attributes Declaration */
        self.title = 'loginController';
        self.userName = '';
        self.password = '';
        /* ***************************** */

        /* Private Methods Declaration */
        function isAValidCredential(credential) {
            return angular.isString(credential) && credential !== ''
        }
        /* *************************** */

        /* Public Methods Declaration */
        self.doLogin = function() {
            if (isAValidCredential(self.userName) && isAValidCredential(self.password)) {
                return authService.doAuth(self.userName, self.password);
            } 
            
            throw new Error('Invalid credentials');
        };
        /* ************************** */

        /* Init */
        function initController() {
        }

        initController();
        /* **** */
    }
})();