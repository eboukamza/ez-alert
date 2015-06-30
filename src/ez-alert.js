angular.module('ez.alert')

    .directive('ezAlert', function () {
        return {
            restrict: 'EA',
            templateUrl: 'template/alert.html',
            transclude: true,
            replace: true,
            link: function (scope, elem, attrs) {
                scope.closeable = 'close' in attrs;
                this.close = scope.close;
            },
            scope: {
                type: '@',
                close: '&'
            }
        };
    });
