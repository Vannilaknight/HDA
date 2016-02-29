angular.module('app').value('mvToastr', toastr);

angular.module('app').factory('mvNotifier', function (mvToastr) {
    return {
        notify: function (msg) {
            mvToastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": true,
                "preventDuplicates": true,
                "showDuration": "300",
                "hideDuration": "100",
                "timeOut": "5000",
                "extendedTimeOut": "2000"
            };
            mvToastr.success(msg);

            console.log(msg);
        }
    }
});