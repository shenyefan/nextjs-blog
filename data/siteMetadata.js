/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Moenya Blog',
  author: 'Moenya',
  headerTitle: 'Moenya Blog',
  description: 'A 💻 Developer and 🎮 Gamer',
  language: 'zh-CN',
  theme: 'system', // system, dark or light
  siteUrl: 'https://moenya.net',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'address@yoursite.com',
  github: 'https://github.com',
  x: 'https://twitter.com/x',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com',
  threads: 'https://www.threads.net',
  instagram: 'https://www.instagram.com',
  locale: 'zh-CN',
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
  },
}

module.exports = siteMetadata
