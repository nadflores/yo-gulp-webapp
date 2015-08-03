'use strict';

angular.module('myApp')
  .controller('HomeCtrl', HomeCtrl)

HomeCtrl.$inject = ['$log', '$scope'];

function HomeCtrl($log, $scope){
  $log.debug('*********HomeCtrl*********');
}
