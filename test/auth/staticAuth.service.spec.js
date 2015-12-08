describe('Static Auth Service Test Suite', function() {
	beforeEach(function() {
		module('Auth');
	});

	var $authService;

	beforeEach(function() {
		inject(['authService', function($_authService_) {
			$authService = $_authService_;
		}]);
	});

	it('Injector must provide a valid javascript object containing a doAuth function', function() {
		expect(angular.isObject($authService)).toBe(true);
		expect(angular.isFunction($authService['doAuth'])).toBe(true);
	});

	it('doAuth must return true if got "userName" and "password" strings as parameters', function() {
		var providedUserName = 'userName';
		var providedPassword = 'password';

		var returnedValue = $authService.doAuth(providedUserName, providedPassword);

		expect(returnedValue).toBe(true);
	});
});