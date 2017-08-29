"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babelPluginTransformEs2015ModulesCommonjs = require("babel-plugin-transform-es2015-modules-commonjs");

var _babelPluginTransformEs2015ModulesCommonjs2 = _interopRequireDefault(_babelPluginTransformEs2015ModulesCommonjs);

var _babelPluginTransformEs2015ModulesUmd = require("babel-plugin-transform-es2015-modules-umd");

var _babelPluginTransformEs2015ModulesUmd2 = _interopRequireDefault(_babelPluginTransformEs2015ModulesUmd);

var _babelPluginTransformClassProperties = require("babel-plugin-transform-class-properties");

var _babelPluginTransformClassProperties2 = _interopRequireDefault(_babelPluginTransformClassProperties);

var _babelPluginTransformDoExpressions = require("babel-plugin-transform-do-expressions");

var _babelPluginTransformDoExpressions2 = _interopRequireDefault(_babelPluginTransformDoExpressions);

var _babelPluginTransformFunctionBind = require("babel-plugin-transform-function-bind");

var _babelPluginTransformFunctionBind2 = _interopRequireDefault(_babelPluginTransformFunctionBind);

var _babelPluginTransformObjectRestSpread = require("babel-plugin-transform-object-rest-spread");

var _babelPluginTransformObjectRestSpread2 = _interopRequireDefault(_babelPluginTransformObjectRestSpread);

var _babelPluginTransformOptionalChaining = require("babel-plugin-transform-optional-chaining");

var _babelPluginTransformOptionalChaining2 = _interopRequireDefault(_babelPluginTransformOptionalChaining);

var _babelPluginTransformAsyncToModuleMethod = require("babel-plugin-transform-async-to-module-method");

var _babelPluginTransformAsyncToModuleMethod2 = _interopRequireDefault(_babelPluginTransformAsyncToModuleMethod);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const buildPreset = (context, opts = {}) => {
  let modules = 'commonjs';

  if (opts.modules != null) modules = opts.modules;

  const preset = {
    plugins: [[_babelPluginTransformClassProperties2.default, opts.transformClassProperties], [_babelPluginTransformDoExpressions2.default, opts.transformDoExpressions], [_babelPluginTransformFunctionBind2.default, opts.transformFunctionBind], [_babelPluginTransformObjectRestSpread2.default, opts.transformObjectRestSpread], [_babelPluginTransformOptionalChaining2.default, opts.transformOptionalChaining], opts.transformAsync !== false && [_babelPluginTransformAsyncToModuleMethod2.default, opts.transformAsyncToModuleMethod], modules === "commonjs" && [_babelPluginTransformEs2015ModulesCommonjs2.default, opts.transformES2015ModulesCommonJS], modules === "umd" && [_babelPluginTransformEs2015ModulesUmd2.default, opts.transformES2015ModulesUMD]].filter(Boolean)
  };
  return preset;
};

const defaultPreset = buildPreset({});
exports.default = defaultPreset;


Object.defineProperty(defaultPreset, "buildPreset", {
  configurable: true,
  writable: true,
  enumerable: false,
  value: buildPreset
});