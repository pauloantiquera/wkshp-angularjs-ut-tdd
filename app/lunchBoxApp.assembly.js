(function() {
    'use strict';

    angular
        .module('lunchBoxApp.assembly', [
            'Login',
            'DailyProduction',            
            'ngRoute'
        ])
        .config(lunchBoxAppAssemblyRoutesConfig);

    lunchBoxAppAssemblyRoutesConfig.$inject = [
        '$routeProvider', 
        'loginDefaultRoute', 
        'dailyProductionDefaultRoute'
    ];

    function lunchBoxAppAssemblyRoutesConfig($routeProvider, loginDefaultRoute, dailyProductionDefaultRoute) {            
        $routeProvider
            .when('/postauthredirection', {
                redirectTo: dailyProductionDefaultRoute
            })
            .otherwise({
                redirectTo: loginDefaultRoute
            });
    }
})();