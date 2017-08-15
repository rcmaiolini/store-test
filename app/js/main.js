import angular from 'angular';

window.$ = window.jQuery = require('../../node_modules/jquery/dist/jquery.js');
let Bootstrap = require('../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js');
Bootstrap.$ = $;

// angular modules
import setupFakeBackend from './fake-backend';
import constants        from './constants';
import onConfig         from './on_config';
import onRun            from './on_run';

import 'angular-ui-router';
import 'ngstorage';
import 'angular-mocks';
import 'angular-resource';
import '../../node_modules/ngCart/dist/ngCart.js';

import './templates';
import './filters';
import './controllers';
import './services';
import './factories';

// create and bootstrap application
const requires = [
  'ui.router',
  'ngStorage',
  'ngMockE2E',
  'ngResource',
  'ngCart',
  'templates',
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.factories'
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').run(setupFakeBackend);

angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
