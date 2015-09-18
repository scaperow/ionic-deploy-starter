angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $rootScope, $ionicDeploy) {

  $scope.updateMinutes = $rootScope.updateOptions.interval / 60 / 1000;

  $rootScope.$on('$ionicDeploy:updateAvailable', function() {
    console.log('UPDATE AVAILABLE');
    $scope.hasUpdate = true;
  });

  $scope.stopCheckingForUpdates = function() {
    $ionicDeploy.unwatch();
  };

  $scope.doUpdate = function() {
    $ionicDeploy.update().then(function(res) {
      console.log('UPDATE SUCCESS', res);
    }, function(err) {
      console.log('UPDATE ERROR', err);
    }, function(prog) {
      console.log('UPDATE', prog);
    });
  };
  

  $scope.checkForUpdates = function() {
    console.log('Checking for updates');
    $ionicDeploy.check().then(function(hasUpdate) {
      $rootScope.lastChecked = new Date();
      $scope.hasUpdate = hasUpdate;
      alert('has update');
      $scope.hasUpdate = true;
    }, function(err) {
      console.error('Unable to check for updates:', err);
      $scope.hasUpdate = false;
    });
  }
})

