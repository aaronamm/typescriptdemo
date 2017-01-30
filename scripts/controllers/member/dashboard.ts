module typescriptdemo.controllers.member {
    "use strict";
    class DashboardController {
        constructor() {
        }

        init(): void {
            console.log("init");
        }
    }

    angular.module("typescriptdemo").controller("dashboard-controller",
        [
            () => {
                return new DashboardController();
            }
        ]);
}
