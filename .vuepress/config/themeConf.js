const sidebar = require('./sidebar')

module.exports = {
  repo: 'yeyuanda/yeyuanda.github.io',
  navbar: true,
  editLinks: true,
  editLinkText: '在 GitHub 上编辑此页',
  lastUpdated: '更新于',
  sidebar,
  nav: [
    { text: '导航', link: '/guide/' },
    {
      text: '大前端',
      items: [
        {
          text: '基础',
          items: [
            { text: 'JavaScript', link: '/passages/2019-03-26-javascript-first/' },
            { text: 'ES6', link: '/passages/2019-04-09-es6/' },
            { text: 'HTML5', link: '/passages/2019-04-10-html5-drag-drop/' },
            { text: '浏览器与安全', link: '/passages/2019-05-15-browser/' },
          ]
        },
      ]
    },
    {
      text: '随手记',
      items: [
        { text: '每周分享', link: '/passages/2019-06-10-weekly-share/' }
      ]
    },
    {
      text: '了解更多',
      items: [
        { text: '友情链接', link: '/friends/' },
        { text: '网站信息', link: '/about/' },
      ]
    }
  ]
}
