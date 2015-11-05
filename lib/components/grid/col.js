'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

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
    var sm = props.sm;
    var md = props.md;
    var lg = props.lg;

    var className = (_className = {}, _defineProperty(_className, styles['xs-' + xs], !!xs), _defineProperty(_className, styles['sm-' + sm], !!sm), _defineProperty(_className, styles['md-' + md], !!md), _defineProperty(_className, styles['lg-' + lg], !!lg), _className);

    return _react2['default'].createElement(
      'div',
      { className: (0, _classnames2['default'])(className, props.className) },
      props.children
    );
  };
};

module.exports = exports['default'];