module.exports = {
  title: 'Jordy Pereira Wiki',
  description: 'Here I will store everything I know.',
  base: '/',
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
      {
        title: 'Javascript',
        collapsable: true,
        children: [
          '/javascript/node-js',
          '/javascript/from-scratch/the-console',
          '/javascript/from-scratch/functions',
          '/typescript/basics/',
        ],
      },
      {
        title: 'Vue',
        collapsable: true,
        children: [
          '/vue/nuxt-tailwind-scss',
          '/vue/vuepress',
          // '/vue/vuetify',
        ],
      },
      {
        title: 'Testing',
        collapsable: true,
        children: [
          '/testing/what-to-test',
          '/testing/vue/unit-tests-example',
          '/testing/vue/factory-function',
          '/testing/vue/vuex',
          '/testing/resources',
        ],
      },
      {
        title: 'Linux',
        collapsable: true,
        children: ['/linux/change-grub-boot-loader'],
      },
      {
        title: 'Docker',
        collapsable: true,
        children: ['/docker/setup', '/docker/webserver', '/docker/devilbox'],
      },
      {
        title: 'LAMP',
        collapsable: true,
        children: ['/lamp/website'],
      },
      {
        title: 'Project Management',
        collapsable: true,
        children: [
          '/project-management/elevator-pitch',
        ],
      },
      {
        title: 'Projects',
        collapsable: true,
        children: ['/projects/receipt_reader/backlog', '/projects/catalyser'],
      },
      {
        title: 'Resources',
        collapsable: true,
        children: [
          '/resources/articles',
          '/resources/typescript',
          '/resources/UI',
          '/resources/project-management',
        ],
      },
    ],
    sidebarDepth: 1,
  },
}
