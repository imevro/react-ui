'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

exports['default'] = function () {
  var styles = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  return function (props) {
    return _react2['default'].createElement(
      'div',
      _extends({}, props, { className: (0, _classnames2['default'])(styles.media, props.className) }),
      props.left && _react2['default'].createElement(
        'div',
        { className: styles.left },
        props.left
      ),
      props.body && _react2['default'].createElement(
        'div',
        { className: styles.body },
        props.body
      ),
      props.right && _react2['default'].createElement(
        'div',
        { className: styles.right },
        props.right
      )
    );
  };
};

module.exports = exports['default'];