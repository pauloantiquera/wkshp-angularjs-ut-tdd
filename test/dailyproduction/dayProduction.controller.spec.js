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
		var expectedTitle = "Daily Production List";

		expect($dayProductionController.getPageTitle()).toEqual(expectedTitle);
	});

	it('The controller must provide a public function that returns an array of production days', function() {
		expect(angular.isArray($dayProductionController.getProductionsList())).toBe(true);
	});

	it('The controller must fill productions list with data get through http get requisition', function() {
		
	});
});