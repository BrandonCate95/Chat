'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const Icon = styled.i.attrs({
//     sizepx: props => 
//     {
//         if(props.small) return '12px'
//         else if(props.medium) return '24px'
//         else return '36px'
//     }
// })`
//     width: ${props => props.sizepx};
//     height: ${props => props.sizepx};
//     font-size: ${props => props.sizepx} !important;
// `

var Spinner = function Spinner(props) {
    return _react2.default.createElement('i', {
        className: '\n            fa fa-spinner fa-spin\n            ' + (props.primary ? 'mdc-theme-primary--color' : '') + '\n            ' + (props.secondary ? 'mdc-theme-secondary--color' : '') + '\n            ' + (props.neutral ? 'mdc-theme-neutral--color' : '') + '\n        ',
        style: props.style,
        small: props.small,
        medium: props.medium,
        large: props.large
    });
};
// import styled from 'styled-components'


Spinner.propTypes = {
    primary: _propTypes2.default.bool,
    secondary: _propTypes2.default.bool,
    neutral: _propTypes2.default.bool,
    size: _propTypes2.default.number
};

exports.default = Spinner;