describe('Alert Messages Directive Unit Test Suite', function() {
	beforeEach(function() {
		module('lunchBoxApp.components');
	});

	var $compile,
		$scope;
	var $messagingServiceMock = {};

	beforeEach(function() {
		module(function($provide) {
			$provide.value('messagingService', $messagingServiceMock);
		});

		inject(['$compile', '$rootScope', function(_$compile_, $rootScope) {
			$compile = _$compile_;
			$scope = $rootScope.$new();
		}]);

		$messagingServiceMock.registerAllEventsListener = jasmine.createSpy('registerAllEventsListener');
	});

	it('Replaces the element with the appropriate content', function() {
		var element = $compile('<alert-messages></alert-messages>')($scope);
		var templateString = '\
        	<script>\
				removeAlert = function(element) {\
					animationTime = 250;\
					element.fadeOut(animationTime);\
					setTimeout(function() {\
						element.remove();\
					}, animationTime);\
				}\
			</script>\
        ';

		$scope.$digest();

		expect(element.html()).toContain(templateString);
	});

	it('must register a listener for all events provided by messagingService', function() {
		var element = $compile('<alert-messages id="alert"></alert-messages>')($scope);
		$scope.$digest();

		expect($messagingServiceMock.registerAllEventsListener).toHaveBeenCalledWith(jasmine.any(Function));
	});
});