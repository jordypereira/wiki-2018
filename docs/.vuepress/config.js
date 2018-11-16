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
    displayAllHeaders: true,
    sidebar: ['/', '/vuepress/'],
  },
}
