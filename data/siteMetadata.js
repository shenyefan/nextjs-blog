/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Moenya',
  author: 'Moenya',
  headerTitle: 'Moenya',
  description: 'A 💻 Developer and 🎮 Gamer',
  language: 'zh-CN',
  theme: 'system', // system, dark or light
  siteUrl: 'https://moenya.net',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/banner.png',
  locale: 'zh-CN',
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
  },
}

module.exports = siteMetadata
