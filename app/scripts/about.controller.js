'use strict';

angular.module('myApp')
  .controller('AboutCtrl', AboutCtrl)

AboutCtrl.$inject = ['$log', '$scope'];

function AboutCtrl($log, $scope){
  $log.debug('*********AboutCtrl*********');
}
