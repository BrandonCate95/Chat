'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\nquery listMessages($conversation: String!, $count: Int, $nextToken: String) {\n    listMessages(conversation: $conversation, count: $count, nextToken: $nextToken) {\n        messages {\n            __typename\n            id\n            content\n            createdAt\n            username\n        }\n        nextToken\n    }\n}'], ['\nquery listMessages($conversation: String!, $count: Int, $nextToken: String) {\n    listMessages(conversation: $conversation, count: $count, nextToken: $nextToken) {\n        messages {\n            __typename\n            id\n            content\n            createdAt\n            username\n        }\n        nextToken\n    }\n}']);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _graphqlTag2.default)(_templateObject);

exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, 'default', 'src/queries/ListMessages.js');
    leaveModule(module);
})();

;