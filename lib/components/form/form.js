'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAutoForm = require('react-auto-form');

var _reactAutoForm2 = _interopRequireDefault(_reactAutoForm);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

exports['default'] = function () {
  var styles = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  return function (props) {
    return _react2['default'].createElement(
      _reactAutoForm2['default'],
      _extends({}, props, { className: (0, _classnames2['default'])(styles.form, props.className) }),
      props.children
    );
  };
};

module.exports = exports['default'];