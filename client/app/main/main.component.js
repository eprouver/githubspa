import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './main.routes';

export class MainController {
  awesomeThings = [];
  newThing = '';

  /*@ngInject*/
  constructor($http, $scope, $rootScope, socket) {
    'ngInject';
    this.$http = $http;
    this.socket = socket;
    this.$rootScope = $rootScope;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });

  }

  $onInit() {
    this.$http.get('/api/things')
      .then(response => {
        var self = this;
        self.awesomeThings = response.data;
        self.socket.syncUpdates('thing', this.awesomeThings, function(){
          self.$rootScope.$broadcast('update-events');
        });
      });
  }

  addThing() {

    this.$http.post('/api/things', {

      "head_commit": {
        "message": "This is a test and doesn't show up on the public feed",
        "timestamp": "2017-08-15T13:21:30-05:00",
        "url": "https://github.com/eprouver/githubapi/commit/74e1d2bad9a867242e2e2885d17a7e8d8cd6112d",
        "author": {
          "name": "Microsoft Test User",
          "email": "test@microsoft.com",
          "username": "eprouver"
        }
      }
    });
  }

  addThingSilent() {

    this.$http.post('/api/things', {

      "head_commit": {
        "message": "This is a test and doesn't show up on the public feed",
        "timestamp": "2017-08-15T13:21:30-05:00",
        "url": "https://github.com/eprouver/githubapi/commit/74e1d2bad9a867242e2e2885d17a7e8d8cd6112d",
        "author": {
          "name": "Test User",
          "email": "tester@yahoo.com",
          "username": "eprouver"
        }
      }
    });


  }

  deleteThing(thing) {
    this.$http.delete(`/api/things/${thing._id}`);
  }
}

export default angular.module('githubspaApp.main', [ngRoute])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
