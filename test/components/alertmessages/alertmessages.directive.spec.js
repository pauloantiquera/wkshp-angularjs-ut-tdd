describe('Alert Messages Directive Unit Test Suite', function() {
	beforeEach(function() {
		module('lunchBoxApp.components');
	});

	var $compile,
		$scope;

	beforeEach(inject(['$compile', '$rootScope', function(_$compile_, $rootScope) {
		$compile = _$compile_;
		$scope = $rootScope.$new();
	}]));

	it('Replaces the element with the appropriate content', function() {
		var element = $compile("<alert-messages></alert-messages>")($scope);

		$scope.$digest();

		expect(element.html()).toContain("hello");
	});
});