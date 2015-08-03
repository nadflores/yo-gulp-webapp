'use strict';

angular.module('myApp')
  .controller('ContactCtrl', ContactCtrl)

ContactCtrl.$inject = ['$log', '$scope'];

function ContactCtrl($log, $scope){
  $log.debug('*********ContactCtrl*********');
}
