(function() {
    'use strict';

    angular
        .module('DailyProduction')
        .controller('dayProductionController', dayProductionController);

    dayProductionController.$inject = [];

    /* @ngInject */
    function dayProductionController() {
        /* Private Attributes Declaration */
        var self = this;
        var pageTitle = 'Days Production List';
        /* ****************************** */

        /* Public Attributes Declaration */
        /* ***************************** */

        /* Private Methods Declaration */

        /* *************************** */

        /* Public Methods Declaration */
        self.getPageTitle = function () {
           return pageTitle; 
        };
        /* ************************** */

        /* Init */
        function initController() {
        }

        initController();
        /* **** */
    }
})();