'use strict'

describe('Login Controller Unit Tests Spec', function() {

	beforeEach(function() {
		module('Login');
	});

	var $loginController;
	var $authServiceMock = {
		doAuth : function() {}
	};

	beforeEach(function() {
		module(function($provide) {
			$provide.value('authService', $authServiceMock);
		});

		inject(function($controller) {
			$loginController = $controller('loginController');
		});			
	});

	describe('userName and password model', function() {
		it('userName and password must be initialized with empty string values', inject(function($controller) {
			var loginController = $controller('loginController');
			expect(loginController.userName).toEqual('');
			expect(loginController.password).toEqual('');
		}));
	});

	describe('doLogin feature', function() {
		it('must throw an invalid credentials error if userName or password was not non valid or empty-string', function() {
			var invalidUserName = '',
				invalidPassword = 1321232132;

			$loginController.userName = invalidUserName;
			$loginController.password = invalidPassword;

			expect($loginController.doLogin).toThrowError('Invalid credentials');
		});

		it('with a valid credential set (userName, password) must return the authService.doLogin returned value', function() {
			var validUserName = 'anyValidUserName',
				validPassword = 'anyValidPassword',
				expectedAuthServiceDoAuthValue = true;

			$loginController.userName = validUserName;
			$loginController.password = validPassword;

			spyOn($authServiceMock, 'doAuth').and.returnValue(expectedAuthServiceDoAuthValue);

			var returnedValue = $loginController.doLogin();

			expect($authServiceMock.doAuth).toHaveBeenCalledWith(validUserName, validPassword);
			expect(returnedValue).toEqual(expectedAuthServiceDoAuthValue);
		});
	});
});