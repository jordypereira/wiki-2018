# Vuepress

- yarn add -D vuepress
- mkdir docs
- touch docs/README.md
- package.json

```json
"scripts": {
  "docs:dev": "vuepress dev docs",
  "docs:build": "vuepress build docs"
},
```

- /docs/.vuepress/config.js

```js
module.exports = {
  title: 'Title',
  description: 'Desc',
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'perjor/learn_testing',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'My Website', link: 'https://jordypereira.be/' },
    ],
    sidebar: [
      '/',
      '/TDD-Tutorial/',
      ['/Edd-Yerburgh/', 'Edd Yerburgh Talk'],
      ['/demos/', 'Demo'],
      '/resources/',
    ],
  },
}
```

- /docs/.vuepress/override.styl

```scss
// Color configuration
$accentColor = #ff5722
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34

// Layout configuration
$navbarHeight = 3.6rem
$sidebarWidth = 20rem
$contentWidth = 740px
```
