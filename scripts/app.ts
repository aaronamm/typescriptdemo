module typescriptdemo {
    "use strict";
    var module = angular.module("typescriptdemo", [ "ui.router" ]);

    configuration.$inject = [
        "$stateProvider",
        "$urlRouterProvider",
    ];

    module.config(configuration);

    module.run(["$rootScope", "$state",
        (root: typescriptdemo.dto.IRootScope, state: ng.ui.IStateService) => {
            root.$on("$stateChangeStart", (event, toState, toParams, fromState, fromParams, options) => {
                // fired when the transition begins
                console.log("start");
            });
            root.$on("$stateNotFound", (event, unfoundState, fromState, fromParams) => {
                // fired when a requested state cannot be found using the provided state name during transition
                console.log("not found");
            });
            root.$on("$stateChangeSuccess", (event, toState, toParams, fromState, fromParams) => {
                // fired once the state transition is complete
                console.log("success");
            });
            root.$on("$stateChangeError", (event, toState, toParams, fromState, fromParams, error) => {
                // fired when an error occurs during transition.
                console.log("error");
            });
        }]);

    function configuration(stateProvider: ng.ui.IStateProvider, urlRouterProvider: ng.ui.IUrlRouterProvider, ): void {
        urlRouterProvider.otherwise("/login");
        stateProvider
            .state("non",
            {
                abstract: true,
                views: {
                    "content": {
                        templateUrl: "../html/nonmember/index.html"
                    }
                }
            })
            .state("non.login",
            {
                url: "^/login",
                views: {
                    "non-member-content@non": {
                        templateUrl: "../html/nonmember/login.html",
                        controller: "home-login-controller",
                        controllerAs: "vm"
                    }
                }
            })
            .state("non.forgot-password",
            {
                url: "^/forgot-password",
                views: {
                    "non-member-content@non": {
                        templateUrl: "../html/nonmember/forgot-password.html",
                        controller: "home-forgot-password-controller",
                        controllerAs: "vm"
                    }
                }
            })
            .state("dashboard",
            {
                url: "/dashboard",
                views: {
                    "content": {
                        templateUrl: "../html/member/dashboard.html",
                        controller: "dashboard-controller",
                        controllerAs: "vm"
                    }
                }
            });
    }
}
