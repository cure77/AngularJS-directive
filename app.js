angular.module('app', ['ui.bootstrap'])

angular.module('app').controller('directivesCtrl', function ($scope) {

	$scope.viewEdit = 'edit';

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
			namedp: '=',
			requiredp: '=',
			modedp: '='
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

angular.module('app').directive('fsmDatePickerRange', function(){
	return {
		templateUrl: 'datePickerRange.html',
		scope: {
			namedpfrom: '=',
			namedpto: '=',
			requiredp: '=',
			modedp: '='
		},
		controller: function($scope, $element, $attrs) {
		
			$scope.fromName = $attrs['namedpfrom'];
			$scope.toName = $attrs['namedpto'];

			$scope.dateOptions = {
				format: 'dd/MM/yyyy',
				//ngModelOptions : {timezone: 'utc'},
				formatYear: 'yyyy',
				startingDay: 1,
				openCloseStatus: {},
				showWeeks: false
			};
		
			$scope.dateToOptions = $scope.dateOptions; // because we will add different min date dynamically after picking date from
		
			$scope.$watch('namedpfrom', function(newValue, oldValue) {
			  if (newValue !== oldValue) {
				if ($scope.namedpto !== undefined && newValue > $scope.namedpto){
				  delete $scope.namedpto;
				}
				$scope.dateToOptions.minDate = $scope.namedpfrom;
			  }
			});
		
			$scope.openClose = function(fieldName) {
				$scope.dateOptions.openCloseStatus[fieldName] = !$scope.dateOptions.openCloseStatus[fieldName];
			};
			
		}
	}
});