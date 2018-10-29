angular.module('app', ['ui.bootstrap'])

angular.module('app').controller('directivesCtrl', function ($scope) {

	$scope.formData = {
		dt: {
			begin: new Date(),
			end: new Date()
		}
	};

});


angular.module('app').directive('fsmDatePicker', function(){
	return {
		templateUrl: 'datePicker.html',
		scope: {
			namedp: '='
		},
		controller: function($scope, $element, $attrs) {
		
			$scope.dateOptions = {
				formatYear: 'yyyy',
				format: 'dd/MM/yyyy',
				//maxDate: new Date(2020, 5, 22),
				//minDate: new Date(),
				//ngModelOptions : {timezone: 'utc'},
				startingDay: 1,
				showWeeks: false,
				openCloseStatus: false
			};
			
			$scope.openClose = function() {
				$scope.dateOptions.openCloseStatus = !$scope.dateOptions.openCloseStatus;
			};
		}
	}

});