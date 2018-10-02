"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var _default = {
    "graphqlEndpoint": "https://fycp3chprnhf5ibeyh764mdwhi.appsync-api.us-east-2.amazonaws.com/graphql",
    "region": "us-east-2",
    "authenticationType": "AWS_IAM",
    "apiKey": "da2-6dvapx2g6bconoxg75a6gmmcn4"
};
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, "default", "src/AppSync.js");
    leaveModule(module);
})();

;