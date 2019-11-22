 var app = angular.module('Fetch_data', ['ng-route']);

app.controller('listdata', function ($scope, $http) {

$scope.users = []; //declare an empty array

$http.get("Jobs.json").success(function (response) {

    alert('batman');
    $scope.users = response; //ajax request to fetch data into $scope.data

    });

});

