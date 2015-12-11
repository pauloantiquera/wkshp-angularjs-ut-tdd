(function() {
    'use strict';

    angular
        .module('lunchBoxApp.services')
        .service('messagingService', messagingService);

    messagingService.$inject = ['$rootScope'];

    /* @ngInject */
    function messagingService($rootScope) {
        this.sendInfoMessage = sendInfoMessage;
        this.sendSuccessMessage = sendSuccessMessage;
        this.sendErrorMessage = sendErrorMessage;

        this.registerInfoEventListener = registerInfoEventListener;
        this.registerSuccessEventListener = registerSuccessEventListener;
        this.registerErrorEventListener = registerErrorEventListener;
        this.registerAllEventsListener = registerAllEventsListener;

        ////////////////

        function sendInfoMessage(message) {
        	$rootScope.$emit('info-event', message);
        };

        function sendSuccessMessage(message) {
        	$rootScope.$emit('success-event', message);
        };

        function sendErrorMessage(message) {
        	$rootScope.$emit('error-event', message);
        };

        function registerInfoEventListener(callbackFn) {
        	$rootScope.$on('info-event', callbackFn);
        };

        function registerSuccessEventListener(callbackFn) {
        	$rootScope.$on('success-event', callbackFn);
        };

        function registerErrorEventListener(callbackFn) {
        	$rootScope.$on('error-event', callbackFn);
        };

        function registerAllEventsListener(callbackFn) {
        	registerInfoEventListener(callbackFn);
        	registerSuccessEventListener(callbackFn);
        	registerErrorEventListener(callbackFn);
        };
    }
})();