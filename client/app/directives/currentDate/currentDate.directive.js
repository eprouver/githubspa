'use strict';
const angular = require('angular');

export default angular.module('currentDate', [])
  .directive('currentDate', function() {
    return {
      template: require('./currentDate.html'),
      restrict: 'EA',
      controllerAs: 'dateCtrl',
      controller: ['$scope', '$http', function($scope, $http){
        var self = this;

        $http.get('/api/date').then(function(res){
          self.date = res.data.date;
        }, function(){
          self.error = true;
        })
      }]
    };
  })
  .name;
