module.exports = {
  title: 'Jordy Pereira Wiki',
  description: 'Here I will store everything I know.',
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'perjor/wiki',
    docsDir: 'docs',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'My Website', link: 'https://jordypereira.be/' },
    ],
    sidebar: [
      '/',
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
    ],
    sidebarDepth: 2,
  },
}
