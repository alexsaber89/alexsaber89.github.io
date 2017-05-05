"use strict";

app.config(function($routeProvider) {
	$routeProvider
  .when('/', {
    templateUrl: '../partials/home.html',
    controller: 'HomeCtrl'
  })
  .when('/about', {
    templateUrl: '../partials/about.html',
    controller: 'AboutCtrl'
  })
  .when('/portfolio', {
    templateUrl: '../partials/portfolio.html',
    controller: 'PortfolioCtrl'
  })
  .when('/music', {
    templateUrl: '../partials/music.html',
    controller: 'MusicCtrl'
  })
  .when('/contact', {
    templateUrl: '../partials/contact.html',
    controller: 'ContactCtrl'
  })
  .otherwise('/');
});