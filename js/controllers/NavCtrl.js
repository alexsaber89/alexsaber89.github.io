"use strict";

app.controller("NavCtrl", function($scope, $location) {

  $scope.showHome = () => {
    console.log("showHome()");
    $location.url('/');
  };

  $scope.showAbout = () => {
    $location.url('/about');
  };

  $scope.showPortfolio = () => {
    $location.url('/portfolio');
  };

  $scope.showMusic = () => {
    $location.url('/music');
  };

  $scope.showContact = () => {
    $location.url('/contact');
  };

});