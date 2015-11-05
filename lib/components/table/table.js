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
    var responsive = _defineProperty({}, styles.responsive, !!styles.responsive);

    var className = _defineProperty({}, styles.bordered, !!props.bordered);

    if (responsive) {
      return _react2['default'].createElement(
        'div',
        { className: styles.responsive },
        _react2['default'].createElement(
          'table',
          _extends({}, props, { className: (0, _classnames2['default'])(styles.table, className, props.className) }),
          _react2['default'].createElement(
            'tbody',
            null,
            props.children
          )
        )
      );
    } else {
      return _react2['default'].createElement(
        'table',
        _extends({}, props, { className: (0, _classnames2['default'])(styles.table, className, props.className) }),
        _react2['default'].createElement(
          'tbody',
          null,
          props.children
        )
      );
    }
  };
};

module.exports = exports['default'];