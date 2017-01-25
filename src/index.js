import presetES2015 from 'babel-preset-es2015'
import transformClassProperties from 'babel-plugin-transform-class-properties'
import transformDoExpressions from 'babel-plugin-transform-do-expressions'
import transformFunctionBind from 'babel-plugin-transform-function-bind'
import transformObjectRestSpread from 'babel-plugin-transform-object-rest-spread'

const buildPreset = (context, opts = {}) => {
  const preset = { ...presetES2015.buildPreset(context, opts.es2015) }
  preset.plugins = preset.plugins.concat([
    transformClassProperties,
    transformDoExpressions,
    transformFunctionBind,
    transformObjectRestSpread,
  ])
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
