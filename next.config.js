const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')

module.exports = withNextra({
    i18n: {
      locales: ['en-US', 'zh-CN', 'de-DE'],
      defaultLocale: 'en-US'
    }
  })
