const YEAR = new Date().getFullYear()

i18n: [
  { locale: 'en-US', text: 'English' },
  { locale: 'zh-CN', text: '中文' },
  { locale: 'de-DE', text: 'Deutsch' },
  { locale: 'ar-SA', text: 'العربية', direction: 'rtl' }
]

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © inkrediblu.com
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
