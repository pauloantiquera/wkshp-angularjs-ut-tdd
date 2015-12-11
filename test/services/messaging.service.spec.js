describe('Messaging Service Unit Test Suite', function() {
	beforeEach(function() {
		module('lunchBoxApp.services');
	});

	var $messagingService,
		$rootScopeMock = {};

	beforeEach(function() {
		module(function($provide) {
			$provide.value('$rootScope', $rootScopeMock)
		});

		inject(['messagingService', function(_$messagingService_) {
			$messagingService = _$messagingService_;
		}]);
	});

	it('Service injector must provide a valid not null javascript object', function() {
		expect(angular.isObject($messagingService)).toBe(true);
		expect($messagingService).not.toBe(null);
	});

	describe('messagingService', function() {
		var message = 'This is a message',
			infoEventName = 'info-event',
			successEventName = 'success-event',
			errorEventName = 'error-event';

		it('must provide a function that permit send a messages for info, success and error, these messages must be send by emiting a $rootScope events', function() {						
			$rootScopeMock.$emit = jasmine.createSpy('$emit');

			$messagingService.sendInfoMessage(message);
			expect($rootScopeMock.$emit).toHaveBeenCalledWith(infoEventName, message);						

			$messagingService.sendSuccessMessage(message);
			expect($rootScopeMock.$emit).toHaveBeenCalledWith(successEventName, message);

			$messagingService.sendErrorMessage(message);
			expect($rootScopeMock.$emit).toHaveBeenCalledWith(errorEventName, message);			
		});

		it('must permit register listener for an event with $rootScope.$on', function() {
			$rootScopeMock.$on = jasmine.createSpy('$on');

			var callbackFn = function() {};

			$messagingService.registerInfoEventListener(callbackFn);
			expect($rootScopeMock.$on).toHaveBeenCalledWith(infoEventName, callbackFn);

			$messagingService.registerSuccessEventListener(callbackFn);
			expect($rootScopeMock.$on).toHaveBeenCalledWith(successEventName, callbackFn);

			$messagingService.registerErrorEventListener(callbackFn);
			expect($rootScopeMock.$on).toHaveBeenCalledWith(errorEventName, callbackFn);
		});

		it('must be possible register a listener for all events', function() {
			$rootScopeMock.$on = jasmine.createSpy('$on');

			var callbackFn = function() {};

			$messagingService.registerAllEventsListener(callbackFn);
			expect($rootScopeMock.$on).toHaveBeenCalledWith(infoEventName, callbackFn);
			expect($rootScopeMock.$on).toHaveBeenCalledWith(successEventName, callbackFn);
			expect($rootScopeMock.$on).toHaveBeenCalledWith(errorEventName, callbackFn);
		});
	});
});