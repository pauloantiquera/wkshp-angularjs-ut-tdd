(function() {
    'use strict';

    angular
        .module('lunchBoxApp.assembly', [
            'Login',
            'DailyProduction',            
            'ui.router'
        ])
        .constant('postAuthRedirectionRoute', '/postauthredirection')
        .config(lunchBoxAppAssemblyRoutesConfig)

    lunchBoxAppAssemblyRoutesConfig.$inject = [
        '$urlRouterProvider',
        'postAuthRedirectionRoute',
        'loginDefaultRoute',
        'dailyProductionDefaultRoute'
    ];  

    function lunchBoxAppAssemblyRoutesConfig($urlRouterProvider, postAuthRedirectionRoute, loginDefaultRoute, dailyProductionDefaultRoute) {
        $urlRouterProvider
            .when(postAuthRedirectionRoute, dailyProductionDefaultRoute)
            .otherwise(loginDefaultRoute);

    }
})();