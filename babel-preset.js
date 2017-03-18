const nextBabelPreset = require('next/babel')

nextBabelPreset.plugins = nextBabelPreset.plugins.map(plugin => {
    return require.resolve('styled-jsx-postcss/babel')
  }
  return plugin
})

module.exports = nextBabelPreset
