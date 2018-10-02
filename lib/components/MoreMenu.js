'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Menu = require('../mdc/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

var MoreMenu = function MoreMenu(props) {
    return _react2.default.createElement(
        _Menu2.default,
        {
            closeMenu: function closeMenu(evt) {
                var btn = evt.target.parentNode.children[0].children[0];
                btn.setAttribute("aria-pressed", "false");
                btn.children[1].innerHTML = 'arrow_drop_down';
            },
            openMenu: function openMenu(evt) {
                if (evt.target.getAttribute("aria-pressed") === "false") {
                    evt.target.setAttribute("aria-pressed", "true");
                    evt.target.children[1].innerHTML = 'arrow_drop_up';
                } else {
                    evt.target.setAttribute("aria-pressed", "false");
                    evt.target.children[1].innerHTML = 'arrow_drop_down';
                }
            },
            style: { margin: "5px" }
        },
        _react2.default.createElement(
            'button',
            {
                'menu-role': 'button',
                'aria-pressed': 'false',
                style: { height: "auto", padding: "5px 0" }
            },
            'menu'
        ),
        _react2.default.createElement(
            _Menu.Menu,
            {
                'menu-role': 'menu',
                offset: '-106px'
            },
            _react2.default.createElement(
                'div',
                null,
                'thing 1'
            ),
            _react2.default.createElement(
                'div',
                null,
                'thing 2'
            )
        )
    );
};

var _default = MoreMenu;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(MoreMenu, 'MoreMenu', 'src/components/MoreMenu.js');
    reactHotLoader.register(_default, 'default', 'src/components/MoreMenu.js');
    leaveModule(module);
})();

;