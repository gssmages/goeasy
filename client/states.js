angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.adhocrequest', {
        views: {
            app: {
                controller: 'app_adhocrequest',
                templateProvider: function (app) {
                    return app.templateProvider('app.adhocrequest');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.myapprovals', {
        views: {
            app: {
                controller: 'app_myapprovals',
                templateProvider: function (app) {
                    return app.templateProvider('app.myapprovals');
                }
            }
        }
    }).state('app.mytrips', {
        views: {
            app: {
                controller: 'app_mytrips',
                templateProvider: function (app) {
                    return app.templateProvider('app.mytrips');
                }
            }
        }
    }).state('app.menuleft', {
        views: {
            app: {
                controller: 'app_menuleft',
                templateProvider: function (app) {
                    return app.templateProvider('app.menuleft');
                }
            }
        }
    }).state('app.popup', {
        views: {
            app: {
                controller: 'app_popup',
                templateProvider: function (app) {
                    return app.templateProvider('app.popup');
                }
            }
        }
    }).state('app.alertwin', {
        views: {
            app: {
                controller: 'app_alertwin',
                templateProvider: function (app) {
                    return app.templateProvider('app.alertwin');
                }
            }
        }
    }).state('app.alertmsg', {
        views: {
            app: {
                controller: 'app_alertmsg',
                templateProvider: function (app) {
                    return app.templateProvider('app.alertmsg');
                }
            }
        }
    }).state('app.login', {
        views: {
            app: {
                controller: 'app_login',
                templateProvider: function (app) {
                    return app.templateProvider('app.login');
                }
            }
        }
    }).state('app.tabsconfident', {
        views: {
            app: {
                controller: 'app_tabsconfident',
                templateProvider: function (app) {
                    return app.templateProvider('app.tabsconfident');
                }
            }
        }
    });
});