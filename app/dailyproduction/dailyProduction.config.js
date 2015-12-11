(function() {
    'use strict';

    angular
        .module('DailyProduction')
        .config(['$stateProvider', function($stateProvider) {
        	$stateProvider
        		.state('production', {
        			url: '/production',
        			templateUrl: 'app/dailyproduction/productionList.html'
        		})
        }])
        .constant('dailyProductionDefaultRoute', '/production');
})();