import transformES2015ModulesCommonJS from "babel-plugin-transform-es2015-modules-commonjs"
import transformES2015ModulesUMD from "babel-plugin-transform-es2015-modules-umd"
import transformClassProperties from 'babel-plugin-transform-class-properties'
import transformDoExpressions from 'babel-plugin-transform-do-expressions'
import transformFunctionBind from 'babel-plugin-transform-function-bind'
import transformObjectRestSpread from 'babel-plugin-transform-object-rest-spread'
import transformOptionalChaining from 'babel-plugin-transform-optional-chaining'

const buildPreset = (context, opts = {}) => {
  let modules = 'commonjs'

  if (opts.modules != null) modules = opts.modules

  const preset = {
    plugins: [
      [transformClassProperties, opts.transformClassProperties],
      [transformDoExpressions, opts.transformDoExpressions],
      [transformFunctionBind, opts.transformFunctionBind],
      [transformObjectRestSpread, opts.transformObjectRestSpread],
      [transformOptionalChaining, opts.transformOptionalChaining],
      modules === "commonjs" && [transformES2015ModulesCommonJS, opts.transformES2015ModulesCommonJS],
      modules === "umd" && [transformES2015ModulesUMD, opts.transformES2015ModulesUMD],
    ].filter(Boolean)
  }
  return preset
}

const defaultPreset = buildPreset({})
export default defaultPreset

Object.defineProperty(defaultPreset, "buildPreset", {
  configurable: true,
  writable: true,
  enumerable: false,
  value: buildPreset,
})
