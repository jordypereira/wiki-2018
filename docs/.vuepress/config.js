module.exports = {
  title: 'Jordy Pereira Wiki',
  description: 'Here I will store everything I know.',
  head: [
    ['script', { href: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    ['script', {}, `
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    `]
  ],
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
        children: ['/articles/Neuro-Web-Design-What-Makes-Them-Click/', '/articles/designing-for-emotion/'],
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
        title: 'Project Management',
        collapsable: false,
        children: [
          '/project-management/elevator-pitch',
        ],
      },
      {
        title: 'Resources',
        collapsable: false,
        children: [
          '/resources/articles',
          '/resources/typescript',
          '/resources/UI',
          '/resources/project-management',
        ],
      },
    ],
    sidebarDepth: 2,
  },
}
