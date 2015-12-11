(function() {
    'use strict';

    angular
        .module('lunchBoxApp.components')
        .directive('alertMessages', alertMessages);

    alertMessages.$inject = ['messagingService'];

    /* @ngInject */
    function alertMessages(messagingService) {
        // Usage: <alert-messages></alert-messages>
        //
        // Creates: <div class="alert-container">
		// 				<div class="alert">
		// 					<button type="button" class="close" onclick="removeAlert($(this).parent())">
		// 						<span class="glyphicon glyphicon-remove-circle"></span>
		// 					</button>
		// 					<span id="alertIcon" class="" aria-hidden="true"></span>
		// 					<div class="alertText"></div>
		// 				</div>
		// 			</div>
        //
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

        var alertHtmlCode = '\
        	<div class="alert-container">\
        		<div class="alert alert-info">\
					<button type="button" class="close" onclick="removeAlert($(this).parent())">\
						<span class="glyphicon glyphicon-remove-circle"></span>\
					</button>\
					<span id="alertIcon" class="" aria-hidden="true"></span>\
					<div class="alertText"></div>\
				</div>\
			</div>\
		';

        var directive = {
            link: link,
            restrict: 'E',
            template: templateString,            
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) {
        	function showMessage(event, message) {
        		var formattedMessage = '<strong>'+event.name+': </strong>'+message;
        		element.append(alertHtmlCode);

        		angular.element('.alertText').html(formattedMessage);
        	}

        	function messagingEventListener(event, message) {
        		showMessage(event, message);
        	};

        	function initDirective() {
        		messagingService.registerAllEventsListener(messagingEventListener);
        	};

        	initDirective();
        }
    }
})();