(function() {
    'use strict';

    angular
        .module('DailyProduction')
        .config(['$routeProvider', function($routeProvider) {
        	$routeProvider.when('/production', {
        		templateUrl: 'app/dailyproduction/productionList.html'
        	})
        }])
        .constant('dailyProductionDefaultRoute', '/production');
})();