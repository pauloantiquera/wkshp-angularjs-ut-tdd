(function() {
    'use strict';

    angular
        .module('Login', ['Auth','ngRoute'])
        .constant('loginDefaultRoute', '/login');
})();