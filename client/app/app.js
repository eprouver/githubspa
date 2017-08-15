'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import 'angular-socket-io';
const ngRoute = require('angular-route');

import {
  routeConfig
} from './app.config';

import navbar from '../components/navbar/navbar.component';
import feed from '../components/feed/feed.component';
import currentDate from './directives/currentDate/currentDate.directive';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';

import './app.scss';

angular.module('githubspaApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io', ngRoute, feed, currentDate,
  navbar, main, constants, socket, util
])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['githubspaApp'], {
      strictDi: true
    });
  });
