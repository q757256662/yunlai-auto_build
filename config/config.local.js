"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const easywebpack_vue_1 = require("@easy-team/easywebpack-vue");
exports.default = (appInfo) => {
    const exports = {};
    exports.static = {
        maxAge: 0
    };
    exports.development = {
        ignoreDirs: ['app/web', 'public', 'config/manifest.json']
    };
    exports.logview = {
        dir: path.join(appInfo.baseDir, 'logs')
    };
    exports.vuessr = {
        injectCss: false
    };
    exports.webpack = {
        browser: false,
        webpackConfigList: easywebpack_vue_1.getWebpackConfig()
    };
    return exports;
};
