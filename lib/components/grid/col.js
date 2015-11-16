'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

exports['default'] = function () {
  var styles = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  return function (props) {
    var _className;

    var xs = props.xs;
    var xsOffset = props.xsOffset;
    var sm = props.sm;
    var smOffset = props.smOffset;
    var md = props.md;
    var mdOffset = props.mdOffset;
    var lg = props.lg;
    var lgOffset = props.lgOffset;

    var className = (_className = {}, _defineProperty(_className, styles['xs-' + xs], !!xs), _defineProperty(_className, styles['xs-offset-' + xsOffset], !!xsOffset), _defineProperty(_className, styles['sm-' + sm], !!sm), _defineProperty(_className, styles['sm-offset-' + smOffset], !!smOffset), _defineProperty(_className, styles['md-' + md], !!md), _defineProperty(_className, styles['md-offset-' + mdOffset], !!mdOffset), _defineProperty(_className, styles['lg-' + lg], !!lg), _defineProperty(_className, styles['lg-offset-' + lgOffset], !!lgOffset), _className);

    return _react2['default'].createElement(
      'div',
      _extends({}, props, { className: (0, _classnames2['default'])(className, props.className) }),
      props.children
    );
  };
};

module.exports = exports['default'];