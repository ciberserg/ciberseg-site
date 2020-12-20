const { description } = require('../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Cibersegurança',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'TI Corporativa',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#681726' }],
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
    // logo: 'Marca_Oficial_Jesuítas_Brasil.png',
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Sobre',
        link: '/sobre/',
      },
      {
        text: 'Guias',
        items: [
          {text: 'Boas práticas', link: '/guias/boas-praticas/' },
          {text: 'Configuração segura', link: '/guias/configuracao-segura/' },
          {text: 'Gestão de acessos', link: '/guias/gestao-acessos/' },
        ]
      },
      {
        text: 'FAQ',
        link: '/faq/'
      },
      // {
      //   text: 'Documentos',
      //   link: '/docs/'
      // },

      {
        text: 'Alertas',
        link: '/alertas/'
      },
      {
        text: 'Jesuítas Brasil',
        link: 'https://www.jesuitasbrasil.org.br/'
      }
    ],
    sidebar: {
      '/guias/boas-praticas/': [
        '',
        'senhas',
        'email',
        'videoconf',
        'onedrive',
        'direito-da-personalidade',
      ],
      '/guias/configuracao-segura/': [
        'wordpress',
        'joomla',
        'windows-server',
        'windows-desktop',
        'linux'
      ],
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
