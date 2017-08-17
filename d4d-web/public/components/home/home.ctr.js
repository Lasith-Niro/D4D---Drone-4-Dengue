(function () {

    "use strict";
    
    angular
        .module('d4d')
        .controller('homeController', ['$state', '$mdToast', '$firebaseAuth', '$firebase', '$firebaseObject', 'sharedUsernameServices', 'sharedUseridServices', function($state, $mdToast, $firebaseAuth, $firebase, $firebaseObject, $sharedUsernameServices, $sharedUseridServices)  {
        
            var vm = this;

            vm.gotoThePage = gotoThePage;

            vm.gettingName = $sharedUsernameServices.getUsername();
            vm.gettingID = $sharedUseridServices.getUserid();
        
            //Lasith updated!!!
            function gotoThePage(pageName) {
                var siteURL = (window.location.href).concat("/"+pageName);
                window.location = siteURL;
            }

            console.log("homeController");

    }]);

})();