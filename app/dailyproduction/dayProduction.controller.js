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
        var pageTitle = 'Daily Production List';
        var productionsList = [];
        /* ****************************** */

        /* Public Attributes Declaration */        
        /* ***************************** */

        /* Private Methods Declaration */

        /* *************************** */

        /* Public Methods Declaration */
        self.getPageTitle = function () {
           return pageTitle; 
        };

        self.getProductionsList = function() {
            return productionsList;
        };
        /* ************************** */

        /* Init */
        function initController() {
        };

        initController();
        /* **** */
    }
})();