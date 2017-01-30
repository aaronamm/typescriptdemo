module typescriptdemo.controllers.nonmember {
    "use strict";
    class ForgotPasswordController {
        constructor() { }

        sendEmail(): void {
            console.log("email sent");
        }
    }

    angular.module("typescriptdemo").controller("home-forgot-password-controller",
        [
            () => {
                return new ForgotPasswordController();
            }
        ]);
}
