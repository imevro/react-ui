'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

var _cell = require('./cell');

var _cell2 = _interopRequireDefault(_cell);

var _heading = require('./heading');

var _heading2 = _interopRequireDefault(_heading);

exports['default'] = { Container: _table2['default'], Row: _row2['default'], Cell: _cell2['default'], Heading: _heading2['default'] };
module.exports = exports['default'];