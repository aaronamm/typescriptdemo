module typescriptdemo.controllers.nonmember {
    "use strict";
    class LoginController {
        constructor(private state: ng.ui.IStateService) {
        }

        login(): void {
            this.state.go("dashboard");
        }
    }

    angular.module("typescriptdemo").controller("home-login-controller",
        [
            "$state",
            (state) => {
                return new LoginController(state);
            }
        ]);
}
