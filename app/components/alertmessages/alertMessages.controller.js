(function() {
    'use strict';

    angular
        .module('lunchBoxApp.components')
        .controller('alertMessagesController', alertMessagesController);

    alertMessagesController.$inject = [
    	'messagingService'
    ];

    /* @ngInject */
    function alertMessagesController(messagingService) {
        /* Private Attributes Declaration */
        var self = this;
        var showMessageFunction;
        /* ****************************** */

        /* Public Attributes Declaration */
        /* ***************************** */

        /* Private Methods Declaration */
        function messagingEventListener(event, message) {
            showMessageFunction(event, message);
        };        
        /* *************************** */

        /* Public Methods Declaration */
        self.getShowMessageFunction = function() {
            return showMessageFunction;
        };

        self.init = function(showMessageFn) {
            if (angular.isFunction(showMessageFn)) {
                showMessageFunction = showMessageFn;
                messagingService.registerAllEventsListener(messagingEventListener);                
            } else {
                throw new Error('Invalid Show Message Function.');
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