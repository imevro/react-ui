'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsAlert = require('./components/alert');

var _componentsAlert2 = _interopRequireDefault(_componentsAlert);

var _componentsPanel = require('./components/panel');

var _componentsPanel2 = _interopRequireDefault(_componentsPanel);

var _componentsButton = require('./components/button');

var _componentsButton2 = _interopRequireDefault(_componentsButton);

var _componentsLoading = require('./components/loading');

var _componentsLoading2 = _interopRequireDefault(_componentsLoading);

var _componentsLabel = require('./components/label');

var _componentsLabel2 = _interopRequireDefault(_componentsLabel);

var _componentsBadge = require('./components/badge');

var _componentsBadge2 = _interopRequireDefault(_componentsBadge);

var _componentsGrid = require('./components/grid');

var _componentsGrid2 = _interopRequireDefault(_componentsGrid);

var _componentsImage = require('./components/image');

var _componentsImage2 = _interopRequireDefault(_componentsImage);

var _componentsTable = require('./components/table');

var _componentsTable2 = _interopRequireDefault(_componentsTable);

var _componentsForm = require('./components/form');

var _componentsForm2 = _interopRequireDefault(_componentsForm);

exports['default'] = function () {
  var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var _props$styles = props.styles;
  var styles = _props$styles === undefined ? {} : _props$styles;
  var _props$components = props.components;
  var components = _props$components === undefined ? {} : _props$components;

  return _extends({
    Alert: (0, _componentsAlert2['default'])(styles.alert),
    Panel: (0, _componentsPanel2['default'])(styles.panel),
    Button: (0, _componentsButton2['default'])(styles.button),
    Loading: (0, _componentsLoading2['default'])(styles.loading),
    Label: (0, _componentsLabel2['default'])(styles.label),
    Badge: (0, _componentsBadge2['default'])(styles.badge),
    Image: (0, _componentsImage2['default'])(styles.image),

    Table: {
      Container: _componentsTable2['default'].Container(styles.table),
      Row: _componentsTable2['default'].Row(styles.table),
      Cell: _componentsTable2['default'].Cell(styles.table),
      Heading: _componentsTable2['default'].Heading(styles.table)
    },

    Form: {
      Container: _componentsForm2['default'].Container(styles.form),
      Group: _componentsForm2['default'].Group(styles.form),
      Input: _componentsForm2['default'].Input(styles.form),
      Textarea: _componentsForm2['default'].Textarea(styles.form),
      Label: _componentsForm2['default'].Label(styles.form),
      Checkbox: _componentsForm2['default'].Checkbox(styles.form),
      Radio: _componentsForm2['default'].Radio(styles.form),
      Select: _componentsForm2['default'].Select(styles.form),
      Static: _componentsForm2['default'].Static(styles.form)
    },

    Grid: {
      Container: _componentsGrid2['default'].Container(styles.grid),
      Row: _componentsGrid2['default'].Row(styles.grid),
      Col: _componentsGrid2['default'].Col(styles.grid)
    }

  }, components);
};

module.exports = exports['default'];