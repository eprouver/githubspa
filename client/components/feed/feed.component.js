'use strict';
const angular = require('angular');

export class feedComponent {

  constructor($http, $scope) {
    'ngInject';
    var self = this;

    function updateEvents(){
      console.log('events updating');

      $http.get('https://api.github.com/repos/eprouver/githubapi/events', {
        username: 'eprouver'
      }).then(function(response) {
        self.events = arguments[0].data;
      }, function(res) {
        //error
        console.error('error getting feed', res);
        self.error = res.data.message || 'Error getting feed.';
      })
    }

    updateEvents();

    $scope.$on('update-events', updateEvents);

  }


}

export default angular.module('feed', [])
  .component('feed', {
    template: require('./feed.html'),
    controller: feedComponent
  })
  .name;
