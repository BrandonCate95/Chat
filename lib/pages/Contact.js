'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\nquery getNeo4j {\n  getNeo4j{\n    neo4j{\n      postId\n      title\n    }\n  }\n}\n'], ['\nquery getNeo4j {\n  getNeo4j{\n    neo4j{\n      postId\n      title\n    }\n  }\n}\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactHelmet = require('react-helmet');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GET_NEO4J = (0, _graphqlTag2.default)(_templateObject);

var AboutPage = function AboutPage() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactHelmet.Helmet,
            null,
            _react2.default.createElement(
                'title',
                null,
                'Contact'
            )
        ),
        'a boot!',
        _react2.default.createElement(
            _reactApollo.Query,
            {
                query: GET_NEO4J,
                notifyOnNetworkStatusChange: true,
                ssr: true
            },
            function (_ref) {
                var loading = _ref.loading,
                    data = _ref.data,
                    refetch = _ref.refetch,
                    networkStatus = _ref.networkStatus;

                if (networkStatus === 4) return "Refetching!";
                if (loading) return null;
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'button',
                        { onClick: function onClick() {
                                return refetch();
                            } },
                        'refetch'
                    ),
                    data.getNeo4j.neo4j.map(function (item) {
                        return _react2.default.createElement(
                            'div',
                            { key: item.postId },
                            item.title
                        );
                    })
                );
            }
        )
    );
};

exports.default = AboutPage;