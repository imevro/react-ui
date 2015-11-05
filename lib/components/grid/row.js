'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

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
      { className: (0, _classnames2['default'])(styles.row, props.className) },
      props.children
    );
  };
};

module.exports = exports['default'];