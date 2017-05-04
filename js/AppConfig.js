"use strict";

app.config(function($routeProvider) {
	$routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeCtrl'
  })
  .when('/dashboard', {
    templateUrl: 'partials/dashboard.html',
    controller: 'DashboardCtrl',
		resolve: {isAuth}
  })
  .when('/domains', {
    templateUrl: 'partials/submittedDomains.html',
    controller: 'SubmittedDomainsCtrl',
		resolve: {isAuth}
  })
  .when('/logout', {
    templateUrl: 'partials/auth.html',
    controller: 'AuthCtrl'
  })
  .otherwise('/auth');
});