$scope.notif = function (msg, error) {
    //cancel timeout if existing alert.
    $timeout.cancel($scope.alertCancel);

    if (error) {
        $log.error("ERROR: " + msg);
        $log.error("CAUSE: " + error);
        $scope.type = "warning";
    }
    else {
        $log.info(msg);
    }

    $scope.message = msg;

    $scope.alertCancel = $timeout(function () {
        $scope.message = "";
    }, 2000);
};

$scope.clearMsg = function () {
    $scope.message = '';
    $timeout.cancel($scope.alertCancel);
};
