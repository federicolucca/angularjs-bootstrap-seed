'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
    value('version', '0.1')
    .factory('DataSource', ['$http', function ($http) {
        return {
            get: function (fileName, callback) {
                $http.get(fileName).
                    success(function (data, status) {
                        callback(data);
                    });
            }
        };
    }]);
