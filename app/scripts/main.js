'use strict';

var angular = require('angular'); // That's right! We can just require angular as if we were in node
angular = window.angular; //require('angular'); is returning an empty object

var WelcomeCtrl = require('./controllers/WelcomeCtrl'); // We can use our WelcomeCtrl.js as a module. Rainbows.
var app = angular.module('myApp', []);
app.controller('WelcomeCtrl', ['$scope', WelcomeCtrl]);

