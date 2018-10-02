'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Menu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _menu = require('@material/menu');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = exports.Menu = function Menu(_ref) {
    var style = _ref.style,
        className = _ref.className,
        children = _ref.children;

    var i = 0;
    var childrenWithProps = _react2.default.Children.map(children, function (child) {
        return _react2.default.cloneElement(child, { className: 'mdc-list-item ' + className, role: "menuitem", tabIndex: '' + i++, style: _extends({ width: "100%" }, style) });
    });

    return _react2.default.createElement(
        'ul',
        { className: 'mdc-menu__items mdc-list', role: 'menu', 'aria-hidden': 'true' },
        childrenWithProps
    );
};

var MenuContainer = function (_React$Component) {
    _inherits(MenuContainer, _React$Component);

    function MenuContainer() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, MenuContainer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = MenuContainer.__proto__ || Object.getPrototypeOf(MenuContainer)).call.apply(_ref2, [this].concat(args))), _this), _this.menu = null, _this.menuEl = _react2.default.createRef(), _this.menuButtonEl = _react2.default.createRef(), _this.componentDidMount = function () {
            // Instantiation
            _this.menu = new _menu.MDCMenu(_this.menuEl.current);
            // Toggle menu open
            _this.menuButtonEl.current.addEventListener('click', _this.toggleMenu);
            // Close Menu if clicked elsewhere
            if (_this.props.closeMenu) {
                _this.menuEl.current.addEventListener('MDCMenu:cancel', _this.props.closeMenu);
            }
            // Set Anchor Corner to Bottom End
            _this.menu.setAnchorCorner(_menu.Corner.BOTTOM_START);
            // Turn off menu open animations
            _this.menu.quickOpen = true;
        }, _this.componentWillUnmount = function () {
            _this.menuButtonEl.current.removeEventListener('click', _this.toggleMenu);
            if (_this.props.closeMenu) {
                _this.menuEl.current.removeEventListener('MDCMenu:cancel', _this.props.closeMenu);
            }
            _this.menu.destroy();
        }, _this.toggleMenu = function (evt) {
            _this.menu.open = !_this.menu.open;
            _this.props.openMenu(evt);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MenuContainer, [{
        key: 'render',
        value: function render() {
            var props = this.props;

            var menu = props.children.filter(function (child) {
                return child.props["menu-role"] === 'menu';
            })[0];
            return _react2.default.createElement(
                'div',
                { style: props.style },
                _react2.default.createElement(
                    'div',
                    { id: 'demo-menu', className: 'mdc-menu-anchor' },
                    _react2.default.createElement(
                        'span',
                        { ref: this.menuButtonEl },
                        props.children.filter(function (child) {
                            return child.props["menu-role"] === 'button';
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        {
                            ref: this.menuEl,
                            className: 'mdc-menu mdc-menu-surface',
                            tabIndex: '-1',
                            style: {
                                left: menu.props.offset + 'px !important'
                            }
                        },
                        menu
                    )
                )
            );
        }
    }]);

    return MenuContainer;
}(_react2.default.Component);

exports.default = MenuContainer;