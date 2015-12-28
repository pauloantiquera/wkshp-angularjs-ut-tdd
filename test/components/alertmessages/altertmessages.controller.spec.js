'use strict'

describe('Alert Messages Controller Unit Test Suit', function() {
	beforeEach(function() {
		module('lunchBoxApp.components');
	});

	var $alertMessagesController;

	var $messagingServiceMock = {};

	beforeEach(function() {
		module(function($provide) {
			$provide.value('messagingService', $messagingServiceMock);
		});

		inject(['$controller', function($controller) {
			$alertMessagesController = $controller('alertMessagesController');
		}]);

		$messagingServiceMock.registerAllEventsListener = jasmine.createSpy('registerAllEventsListener');
	});

	it('the controller factory must be able to create an alertMessagesController instance', function() {
		expect(angular.isObject($alertMessagesController)).toBe(true);
	});

	it('must hava a init function', function() {
		expect(angular.isFunction($alertMessagesController.init)).toBe(true);
	});

	it('the init function must receive a function as a param, this param must be stored and would be retrieved with getShowMessageFunction function', function() {
		var showMessageFunction = function() {};
		$alertMessagesController.init(showMessageFunction);

		var returnedShowMessageFunction = $alertMessagesController.getShowMessageFunction();

		expect(returnedShowMessageFunction).toEqual(showMessageFunction);
	});

	it('the init function must throw an "Invalid Show Message Function." if the param was not a valid function', function() {
		expect($alertMessagesController.init).toThrowError('Invalid Show Message Function.');
	});
	
	it('the init function must register a callback function that render the element when a messaging event occours', function() {		
		$alertMessagesController.init(function() {});

		expect($messagingServiceMock.registerAllEventsListener).toHaveBeenCalledWith(jasmine.any(Function));
	});

	it('the showMessageFunction must be call when the callback function was invoked', function() {
		var showMessageFunction = jasmine.createSpy('showMessageFunction');
		var event = 'anEvent';
		var message = 'aMessage';

		$alertMessagesController.init(showMessageFunction);

		var callbackFunction = $messagingServiceMock.registerAllEventsListener.calls.mostRecent().args[0];

		callbackFunction(event, message);

		expect(showMessageFunction).toHaveBeenCalledWith(event, message);
	});
});