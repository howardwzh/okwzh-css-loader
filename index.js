const getOptions = require('loader-utils').getOptions
const validateOptions = require('schema-utils')

const schema = {
  type: 'object',
  properties: {
    pxtorem: {
      rootValue: 'number'
    }
  }
}

module.exports = function (source) {
  const options = getOptions(this)
  validateOptions(schema, options, 'okwzh-css-loader')
  source = source.replace(/(\d+)px/g, (value) => {
    return `${value.split('px')[0] / options.pxtorem.rootValue}rem` 
  })
  return source
}
