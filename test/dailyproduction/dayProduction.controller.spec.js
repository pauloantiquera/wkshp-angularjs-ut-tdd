'use strict'

describe('dayProductionController unit test Spec', function() {	
	beforeEach(module('DailyProduction'));

	var $dayProductionController;

	beforeEach(inject(function($rootScope, $controller) {
		$dayProductionController = $controller('dayProductionController');
	}));

	it('The injected controller must be a javascript object', function() {
		expect(angular.isObject($dayProductionController)).toBe(true);
	});

	it('The controller must provide a public function that returns a page title as "Days Production List"', function() {
		var expectedTitle = "Days Production List";

		expect($dayProductionController.getPageTitle()).toEqual(expectedTitle);
	});
});