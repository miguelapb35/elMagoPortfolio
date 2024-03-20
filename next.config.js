const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')

module.exports = withNextra({
    i18n: {
      locales: ['zh-CN', 'de-DE', 'en-US'],
      defaultLocale: 'en-US'
    }
  })
