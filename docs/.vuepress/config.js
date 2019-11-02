module.exports = {
  theme: 'ououe',
  title: 'Vckkk‘blog',
  description: 'Do what you want',
  vergreen: true,
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.png'
    }]
  ],
  base: '/',
  port: 8085,
  serviceWorker: true,
  themeConfig: {
    defaultTheme: 'dark',
    activeHeaderLinks: false,
    cover: '/cover.jpg',
    // displayAllHeaders: true,
    nav: [{
        text: '',
        link: '/'
      },
      {
        text: '',
        link: '/Pages/'
      },
      {
        text: 'Flutter',
        link: '/Flutter/'
      },
      {
        text: 'Daily',
        link: '/Daily/'
      }
    ],
    search: true,
    useVssue: true,
    searchMaxSuggestions: 10,
    backgroundImage: true,
    // lastUpdated: '最后更新于：',
    postTime: {
      createTime: '创建时间',
      lastUpdated: '更新时间'
    },
    repo: 'git@github.com:vckkk/blog.git',
    docsBranch: 'gh-pages'

  },
  postcss: {
    plugins: [
      require('css-prefers-color-scheme/postcss'),
      require('autoprefixer')
    ]
  },
  plugins: [
    ['@vssue/vuepress-plugin-vssue', {
      platform: 'github',
      owner: 'vckkk',
      repo: 'blog',
      clientId: 'MDQ6VXNlcjM3MzI0MjIx',
      clientSecret: 'c8f21f3c47c6e78f5e51e72e55a44f019a91ef8b'
    }],
  ]
}