---
title: NUXT + Tailwind + SCSS
tags: [Nuxt, SCSS, Tailwind]
---

# Nuxt + Tailwind + SCSS

## Install Nuxt

Install Nuxt using their [guidelines](https://nuxtjs.org/guide/installation).  
It gives you 2 options: Either yarn or npx. Using `yarn create nuxt-app` doesn't work for me because it says I need a Node version between 4 and 9, and I'm on v11.3.0.

So we try npx instead. `npx create-nuxt-app nuxt-tailwind` works and we can choose tailwind right out of the box.  
It does get stuck when its done though. The only way I can solve this is by closing and reopening the terminal.

## Tailwind

If you're adding tailwind to an existing Nuxt project, install it using yarn. `yarn add -D tailwindcss`.

Now we can see the `tailwind.js` that's added in the root folder. This is the main config file for all your tailwind classes.  
If you don't have this file you can create it by typing `./node_modules/.bin/tailwind init tailwind.js` in your terminal.

This gets loaded in from `postcss.config.js`. 

```js
// postcss.config.js
const join = require('path').join
const tailwindJS = join(__dirname, 'tailwind.js')

module.exports = {
  plugins: [
    require('tailwindcss')(tailwindJS),
    require('autoprefixer')
  ]
}
```

Tailwind has 2 parts. the css and the js which is the config file. The css gets added in the `nuxt.config.js` file, under the css module.

```js
// nuxt.config.js
  css: [
    '~/assets/css/tailwind.css'
  ],
 ```

## SCSS

`yarn add -D node-sass sass-loader` We need these 2 to globally load in our scss. After that we can create a `/assets/css/main.scss` and import tailwind in there or we import main.scss alongside tailwind in our `nuxt.config.js`.

```scss
// /assets/css/main.scss
@import "tailwind"
```

```js
// nuxt.config.js
  css: [
    '~/assets/css/main.scss'
  ],
 ```

## Tailwind theming

Following the guidelines of tailwind, if we want to add more atoms in our css like colors, margins or fonts, we add them directly in the `tailwind.config.js`. If we have custom components like cards and buttons, we make a seperate scss file and import them in our `/assets/css/tailwind.scss` file, which we just renamed from .css, so we can use `@import "components/buttons`. This is usually imported after the `@tailwind components`.

### Components

Here we can use a mix of scss and tailwind.  
Best case is to make a class and give it tailwind classes using the @apply directive. [docs](https://tailwindcss.com/docs/functions-and-directives/#apply)

We can use variables and if we want to use a tailwind variable in our scss variable, we do it like this: `$dropdown-color: config('colors.white');`.

To answer the question which variables we can use, [the docs](https://tailwindcss.com/docs/functions-and-directives/#config) tells us of colors and textSizes. These are the names of the variables that get exported in our `tailwind.js` file. The colors is special in this case because it gets explicitly exported with the color library especially for this purpose. The other classes are just the variable names, and they all work like the `config('textSizes.xl')` example

## Examples

Some examples of my last project.

### Adding your fonts and titles

```scss
// typography.scss
@font-face {
  font-family: 'Choplin';
  src: url('~assets/fonts/Choplin-Medium-DEMO.otf');
  font-weight: 500;
}
@font-face {
  font-family: 'Choplin';
  src: url('~assets/fonts/Choplin-ExtraLight-DEMO.otf');
  font-weight: 200;
}

body {
  @apply font-body font-normal text-sm leading-normal text-white;
  letter-spacing: -0.28px;
}

.title {
  @apply font-section font-medium text-white leading-none;
  font-size: 40px;
  letter-spacing: -0.8px;
}

.sub-title {
  @apply text-white text-xl leading-none;
  line-height: 1.1;
  letter-spacing: -0.4px;
}

.section-title {
  @apply font-section font-medium text-white text-xl leading-none;
  letter-spacing: -0.4px;
}
```

I then changed my tailwind config to contain exactly what I need.

```js
// tailwind.config.js
  fonts: {
    'body': ['Arial'],
    'section': ['Choplin', 'Arial', 'Helvetica', 'sans-serif']
  },
```

Don't be afraid of bloating your tailwind config file. You can purge all unused classes with PurgeCSS.
