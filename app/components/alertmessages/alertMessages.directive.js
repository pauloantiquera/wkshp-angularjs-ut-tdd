(function() {
    'use strict';

    angular
        .module('lunchBoxApp.components')
        .directive('alertMessages', alertMessages);

    alertMessages.$inject = [];

    /* @ngInject */
    function alertMessages() {
        // Usage: <alert-messages></alert-messages>
        //
        // Creates: <div>hello</div>
        //
        var directive = {
            bindToController: true,
            controller: alertMessagesController,
            controllerAs: 'alertMessagesCtrl',
            link: link,
            restrict: 'E',
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) {
        	element.html('<div>hello</div>');
        }
    }

    /* @ngInject */
    function alertMessagesController() {

    }
})();