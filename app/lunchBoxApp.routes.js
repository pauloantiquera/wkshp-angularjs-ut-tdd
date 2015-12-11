(function() {
    'use strict';

    angular
        .module('lunchBoxApp.routes', ['ui.router'])
        .config(['$stateProvider', function($stateProvider) {
        	$stateProvider
                .state('about', {
                    url: '/about',
                    templateUrl: 'aboutPage.html'
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: 'contactPage.html'
                });
        }]);
})();