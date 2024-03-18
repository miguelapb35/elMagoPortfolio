export default {
    footer: <p>MIT 2023 © Nextra.</p>,
    head: ({ title, meta }) => (
      <>
        {meta.description && (
          <meta name="description" content={meta.description} />
        )}
        {meta.tag && <meta name="keywords" content={meta.tag} />}
        {meta.author && <meta name="author" content={meta.author} />}
      </>
    ),
    readMore: 'Read More →',
    postFooter: null,
    darkMode: false,
    navs: [
      {
        url: 'https://github.com/shuding/nextra',
        name: 'Nextra'
      }
    ],
    i18n: [
      { locale: 'en-US', text: 'English' },
      { locale: 'zh-CN', text: '中文' },
      { locale: 'de-DE', text: 'Deutsch' },
      { locale: 'ar-SA', text: 'العربية', direction: 'rtl' }
    ]
  }