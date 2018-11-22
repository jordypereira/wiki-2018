module.exports = {
  title: 'Jordy Pereira Wiki',
  description: 'Here I will store everything I know.',
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'perjor',
    docsDir: 'docs',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'My Website', link: 'https://jordypereira.be/' },
    ],
    sidebar: [
      // '/',
      '/vuepress/',
      'typescript/basics/',
      {
        title: 'Javascript',
        collapsable: false,
        children: [
          '/javascript/from-scratch/the-console',
          '/javascript/from-scratch/functions',
        ],
      },
      {
        title: 'Articles',
        collapsable: false,
        children: ['/articles/Neuro-Web-Design-What-Makes-Them-Click/'],
      },
      {
        title: 'Testing',
        collapsable: false,
        children: [
          '/testing/',
          '/testing/what-to-test',
          '/testing/vue/unit-tests-example',
          '/testing/vue/factory-function',
          '/testing/vue/vuex',
          '/testing/resources',
        ],
      },
      {
        title: 'Docker',
        collapsable: false,
        children: ['/docker/setup', '/docker/webserver', '/docker/devilbox'],
      },
      {
        title: 'LAMP',
        collapsable: false,
        children: ['/lamp/website'],
      },
      '/vuetify/',
      {
        title: 'Resources',
        collapsable: false,
        children: [
          '/resources/articles',
          '/resources/typescript',
          '/resources/UI',
        ],
      },
    ],
    sidebarDepth: 2,
  },
}
