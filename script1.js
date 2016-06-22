angular.module("myApp",["ui.bootstrap","ngAnimate","ngMessages","ui.mask"])

.controller('myCtrl', function ($scope, $window) {
  
  $scope.location=["Boston","New York","Chicago","San Francisco"];
  $scope.goingTo=$scope.location[0];
  
  $scope.nextPage= function(tabIndex) {
	 
	if ($scope.userForm.nestedForm1.$valid) {
	      $scope.indextab=tabIndex;
	    }
	 }

  $scope.submitForm = function(isValid) {

	    // check to make sure the form is completely valid
	    if (isValid) {
	      alert('our form is amazing');
	    }

	  };	  


    
    $scope.dtDepart = new Date();
    $scope.dtReturn=$scope.dtDepart;  
	    
	        
	
	  $scope.clear = function() {
	    $scope.dtDepart = null;
	    $scope.dtReturn= null;
	    
	    
	   };

	   $scope.validateDate= function() {
		   if($scope.dtReturn-$scope.dtDepart <=0){
			   alert ("Check Return Date");
		   }
		    
		    
		   };

	   
	  
/*	   $scope.inlineOptions = {
	    customClass: getDayClass,
	    minDate: new Date(),
	    showWeeks: true
	  };

	  $scope.dateOptions = {
	    dateDisabled: disabled,
	    formatYear: 'yy',
	    maxDate: new Date(2020, 5, 22),
	    minDate: new Date(),
	    startingDay: 1
	  };

*/	  /*// Disable weekend selection
	  function disabled(data) {
	    var date = data.date,
	      mode = data.mode;
	    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
	  }
*/
/*	  $scope.toggleMin = function() {
	    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
	    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
	  };

	  $scope.toggleMin();

*/	  
		$scope.open1 = function() {
			$scope.popup1.opened = true;
			$scope.dtReturn=$scope.dtDepart;  
					
	  };

	  $scope.open2 = function() {
	    $scope.popup2.opened = true;
	    
	  };

	  $scope.setDate = function(year, month, day) {
	    $scope.dtDepart = new Date(year, month, day);
	    $scope.dtReturn = new Date(year, month, day);
	  };

	  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	  $scope.format = $scope.formats[0];
	  $scope.altInputFormats = ['M!/d!/yyyy'];

	  $scope.popup1 = {
	    opened: false
	  };

	  $scope.popup2 = {
	    opened: false
	  };

	  /*var tomorrow = new Date();
	  tomorrow.setDate(tomorrow.getDate() + 1);
	  var afterTomorrow = new Date();
	  afterTomorrow.setDate(tomorrow.getDate() + 1);
	  $scope.events = [
	    {
	      date: tomorrow,
	      status: 'full'
	    },
	    {
	      date: afterTomorrow,
	      status: 'partially'
	    }
	  ];

	  function getDayClass(data) {
	    var date = data.date,
	      mode = data.mode;
	    if (mode === 'day') {
	      var dayToCheck = new Date(date).setHours(0,0,0,0);

	      for (var i = 0; i < $scope.events.length; i++) {
	        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

	        if (dayToCheck === currentDay) {
	          return $scope.events[i].status;
	        }
	      }
	    }

	    return '';
	  }*/
	});