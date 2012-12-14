var controllers = controllers || {};
controllers.account = controllers.account || {};

controllers.account.login = function () {
    helpers.alertInUpperCase('Called Login action on Account controller');
};

controllers.account.logout = function () {
    helpers.alertInLowerCase('Called Logout action on Account controller');
};