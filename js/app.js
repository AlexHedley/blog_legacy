var myApp = angular.module('myApp',[]);
myApp.controller('myController', function ($scope, $http, $q, $filter) {

    $scope.list = [];

    $scope.init = function () {
        getData();
    }

    getData = () =>  {
        var file = 'data/list.json';

        $http.get(file)
            .then(function(response) {
                $scope.list = response.data.item;
            });
    };

    $scope.init();
});

myApp.filter('toDate', function() {
    return function(items) {
      return new Date(items);
    };
  });