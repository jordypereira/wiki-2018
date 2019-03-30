---
title: Setup Vue Testing
tags: [Vue, Javascript, Testing]
date: 2018-10-09
---

# Setup Vue Testing

## Set up Laravel to work with vue testing

I mostly followed this [article](https://dev.to/bahdcoder_47/setting-up-jest-in-a-laravel-project-59b7) except that the js folder is not in the assets folder anymore.  
I'll sum it up real quick.

1. `npm i -D jest vue-jest babel-jest @vue/test-utils`  
   or  
   `yarn add -D jest vue-jest babel-jest @vue/test-utils`
2. This tells the jest compiler where to look for the test files and what to use to compile them.

```js
// jest.config.js

module.exports = {
  testRegex: 'resources/assets/js/test/.*.spec.js$',
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
}
```

3. npm run test or tdd to keep it running

```json
// package.json

"scripts": {
    "test": "jest",
    "tdd": "npm run test -- --watch --notify"
}
```

4. Expose the babel config

```js
// .babelrc

{
  "presets": [
    "env"
  ]
}
```
