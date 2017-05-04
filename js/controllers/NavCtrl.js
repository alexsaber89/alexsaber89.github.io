"use strict";

app.controller("NavCtrl", function($scope, $location) {

  $scope.showHome = () => {
    $location.url('/');
  };

  $scope.showAbout = () => {
    $location.url('/domains');
  };

  $scope.showPortfolio = () => {
    $location.url('/logout');
  };

  $scope.showMusic = () => {
    $location.url('/logout');
  };

  $scope.showContact = () => {
    $location.url('/logout');
  };

});