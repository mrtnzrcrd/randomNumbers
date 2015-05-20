/*
 *   masterASP
 *   Javascript Competency Test
 *   by Ricardo Martinez Montes
 */

angular.module('masterAspApp', [])
    .controller('RandomController', ['$scope', '$http', function ($scope, $http) {
        $scope.serverTime = 4000;
        $scope.time = 2000;

        var intervalFlag;

        $scope.numbers = [];

        $scope.newInterval = function () {
            clearInterval(intervalFlag);
            $scope.initInterval();
        };

        $scope.initInterval = function () {
            intervalFlag = setInterval(function () {
                $http.get('/api/random')
                    .success(function (data) {
                        var type = 'success';
                        if (data.random < 50) type = 'danger';
                        $scope.numbers.unshift({
                            number: data.random,
                            time: new Date(),
                            type: type
                        });
                    });
            }, $scope.time);
        };

        $scope.changeTimeOnServer = function () {
            $http.get('/api/newTime',
                {
                    params: {
                        time: $scope.serverTime
                    }
                })
                .success(function (data) {
                    var type = 'success';
                    if (data.random < 50) type = 'danger';
                    $scope.numbers.unshift({
                        number: data.random,
                        time: new Date(),
                        type: type
                    });
                });
        };
    }]);