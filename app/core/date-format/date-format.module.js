'use strict';

// Define the `dateFormat` module
var dateFormat = angular.module('dateFormat',[]);

dateFormat.controller('DateFormatController', function DateFormatController($scope) {
    var d_names = ["Sunday","Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
    var m_names = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];

    var dateParam;
    if ( dateParam == null ) {
       dateParam = new Date();
    }

    var day = dateParam.getDate();
    var monthIndex = dateParam.getMonth();
    var year = dateParam.getFullYear();
    var dayOfTheWeek = dateParam.getDay();

    $scope.dateDisplay = d_names[dayOfTheWeek] + ", " + day + " " + m_names[monthIndex] + " " + year;
});