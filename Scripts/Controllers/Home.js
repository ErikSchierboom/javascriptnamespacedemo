var controllers = controllers || {};
controllers.home = controllers.home || {};

controllers.home.index = function () {
    helpers.alertInUpperCase('Called Index action on Home controller');
};

controllers.home.overview = function () {
    helpers.alertInLowerCase('Called Overview action on Home controller');
};