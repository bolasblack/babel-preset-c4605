'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _babelPresetEs = require('babel-preset-es2015');

var _babelPresetEs2 = _interopRequireDefault(_babelPresetEs);

var _babelPluginTransformClassProperties = require('babel-plugin-transform-class-properties');

var _babelPluginTransformClassProperties2 = _interopRequireDefault(_babelPluginTransformClassProperties);

var _babelPluginTransformDoExpressions = require('babel-plugin-transform-do-expressions');

var _babelPluginTransformDoExpressions2 = _interopRequireDefault(_babelPluginTransformDoExpressions);

var _babelPluginTransformFunctionBind = require('babel-plugin-transform-function-bind');

var _babelPluginTransformFunctionBind2 = _interopRequireDefault(_babelPluginTransformFunctionBind);

var _babelPluginTransformObjectRestSpread = require('babel-plugin-transform-object-rest-spread');

var _babelPluginTransformObjectRestSpread2 = _interopRequireDefault(_babelPluginTransformObjectRestSpread);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildPreset = function buildPreset(context) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var preset = _extends({}, _babelPresetEs2.default.buildPreset(context, opts.es2015));
  preset.plugins = preset.plugins.concat([_babelPluginTransformClassProperties2.default, _babelPluginTransformDoExpressions2.default, _babelPluginTransformFunctionBind2.default, _babelPluginTransformObjectRestSpread2.default]);
  return preset;
};

var defaultPreset = buildPreset({});
exports.default = defaultPreset;


Object.defineProperty(defaultPreset, "buildPreset", {
  configurable: true,
  writable: true,
  enumerable: false,
  value: buildPreset
});