const frontend = [
  {
    title: 'JavaScript',
    children: [
      'js/JavaScript基础知识梳理-上',
      'js/JavaScript基础知识梳理-下',
      'js/正则表达式',
      'js/前端面试中常考的源码实现',
      'js/JavaScript高级程序设计-读书笔记',
    ]
  },
  {
    title: 'ES6',
    children: [
      'es6/Promise概述',
      'es6/ES6重难点整理',
      'es6/谈谈promise-async-await的执行顺序与V8引擎的BUG'
    ]
  },
  {
    title: 'HTML5',
    children: [
      'html5/canvas学习和滤镜实现',
      'html5/canvas离屏技术与放大镜实现',
      'html5/websocket学习和群聊实现',
      'html5/ServiceWorker离线缓存实战',
      'html5/HTML5原生拖放事件的学习与实践',
    ]
  },
  {
    title: '浏览器与安全',
    children: [
      '浏览器与安全/SSL连接并非完全安全问题解决',
      '浏览器与安全/浏览器常见考点',
      '浏览器与安全/Web安全与防护'
    ]
  },
  {
    title: '开发实战',
    children: [
      '开发实战/MathJax-让前端支持数学公式',
      '开发实战/momentjs使用详解',
      '开发实战/axios全局代理实战',
      '开发实战/React中的组件通信',
      '开发实战/微信网页登录逻辑与实现',
    ]
  }
]

const weekly = [
  '',
  '2019/02-心谭-如何缩小学习反馈周期',
  '2019/01-心谭-第一期',
  '2018/02-心谭-第二期',
  '2018/01-心谭-第一期',
]

module.exports = {
  '/前端知识体系/': frontend,
  '/每周分享/': weekly
}
