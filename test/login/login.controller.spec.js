'use strict'

describe('Login Controller Unit Tests Spec', function() {

	beforeEach(function() {
		angular.module('Auth', []);
		angular.module('ngRoute', []);
		module('Login');
	});

	var $loginController;
	var $authServiceMock = {
		doAuth : function() {}
	};
	var $locationMock = {
		path: function() {}
	};
	var $messagingServiceMock = {};

	beforeEach(function() {
		module(function($provide) {
			$provide.value('authService', $authServiceMock);
			$provide.value('$location', $locationMock);
			$provide.value('messagingService', $messagingServiceMock);
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
		it('must send a "Invalid credentials." error message through messagingService if userName or password was not non valid or empty-string', function() {
			var invalidUserName = '',
				invalidPassword = 1321232132,
				errorMessage = 'Invalid credentials.';

			$messagingServiceMock.sendErrorMessage = jasmine.createSpy('sendErrorMessage');
			$loginController.userName = invalidUserName;
			$loginController.password = invalidPassword;

			$loginController.doLogin();

			expect($messagingServiceMock.sendErrorMessage).toHaveBeenCalledWith(errorMessage);
		});

		it('with a valid credential set (userName, password) and true return from authService.doAuth must redirect to /postauthredirection route', function() {
			var validUserName = 'anyValidUserName',
				validPassword = 'anyValidPassword',
				expectedAuthServiceDoAuthValue = true;

			$loginController.userName = validUserName;
			$loginController.password = validPassword;

			spyOn($authServiceMock, 'doAuth').and.returnValue(expectedAuthServiceDoAuthValue);
			spyOn($locationMock, 'path');

			$loginController.doLogin();

			expect($authServiceMock.doAuth).toHaveBeenCalledWith(validUserName, validPassword);
			expect($locationMock.path).toHaveBeenCalledWith('/postauthredirection');
		});

		it('must send an "Wrong userName or password." error message through messagingService if authService.doAuth returns false', function() {
			var validUserName = 'anyValidUserName',
				validPassword = 'anyValidPassword',
				expectedAuthServiceDoAuthValue = false,
				errorMessage = 'Wrong userName or password.';

			spyOn($authServiceMock, 'doAuth').and.returnValue(expectedAuthServiceDoAuthValue);
			$messagingServiceMock.sendErrorMessage = jasmine.createSpy('sendErrorMessage');

			$loginController.userName = validUserName;
			$loginController.password = validPassword;

			$loginController.doLogin();

			expect($messagingServiceMock.sendErrorMessage).toHaveBeenCalledWith('Wrong userName or password.');
		});
	});
});