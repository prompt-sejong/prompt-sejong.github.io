const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Prompt! Page',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Java Study',
        link: '/java/',

        // items: [
        //   { text: '1기', link: '/java/1st-study/',},
        // ]
      },
      {
        text: 'GitHub',
        link: 'https://github.com/prompt-sejong'
      }
    ],
    sidebar: {
      sidebar: {
        '/java/': [{
          title: 'Java Study',
          sidebarDepth: 1, 
          children: [
            '',
            ['1st-study/', {
              title: '1기',
              sidebarDepth: 2, 
              children: [
                ['assignment-1/', {
                  title: '과제 1',
                  sidebarDepth: 3, 
                  children: []
                }],
                'bar'
              ]
            }]
          ]
        }]
      }
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
