"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
exports.default = (appInfo) => {
    const config = {};
    config.siteFile = {
        '/favicon.ico': fs.readFileSync(path.join(appInfo.baseDir, 'app/web/asset/images/favicon.ico'))
    };
    config.view = {
        cache: false
    };
    config.vuessr = {
        layout: path.resolve(appInfo.baseDir, 'app/web/view/layout.html'),
        renderOptions: {
            basedir: path.join(appInfo.baseDir, 'app/view'),
        },
    };
    config.logger = {
        consoleLevel: 'DEBUG',
        dir: path.join(appInfo.baseDir, 'logs')
    };
    config.static = {
        prefix: '/public/',
        dir: path.join(appInfo.baseDir, 'public')
    };
    config.keys = '123456';
    config.middleware = [
        'access',
        'global'
    ];
    return config;
};
