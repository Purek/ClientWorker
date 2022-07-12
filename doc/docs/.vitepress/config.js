import cwpkgjson from './../../../package.json';
export default {
    title: 'ClientWorker',
    description: '一个基于规则的前端路由拦截器',
    lang: 'zh-CN',

    head: [
      //['link', { rel: 'icon', href: '/favicon.png' }],
      ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi' }],
      ['link', { href: 'https://npmm/lightgallery@2.3.0/css/lightgallery.css', rel: 'stylesheet' }],
      ['script', { src: 'https://npmm/lightgallery@2.3.0/lightgallery.min.js' }],
      ['script', { src: `https://npmm/clientworker@${cwpkgjson.version}/dist/autoupdate.js` }]
    ],
  
    lastUpdated: true,
    themeConfig: {
        sidebar: [
            {
                text: '上手',
                items: [
                    { text: '开始', link: '/start' }
                ]
            },
            {
                text: '规则书写',
                items: [
                    { text: '捕捉与搜索 | Search & Catch', link: '/rule/' },
                    { text: 'url重写/并发 | url replace/parallel', link: '/rule/replace' },
                    { text: '重定向 | redirect', link: '/rule/redirect' },
                    { text: '返回响应 | return', link: '/rule/return' },
                    { text: '重写标头 | header', link: '/rule/header' },
                    { text: '发起请求 | fetch', link: '/rule/fetch' }
                ]
            },
            {
                text: '例子',
                items: [
                    { text: '开始部署一个托管在npm上的播客吧', link: '/example/npmblog' },
                    { text: '如何自动更新配置和ClientWorker', link: '/example/autoupdate' },
                ]
            },
            {
                text: '拓展',
                items: [
                    { text: '关于引擎', link: '/ext/engine' }
                ]
            }
        ]
    }
}