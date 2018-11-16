# Factory

## Writing less dummy code in our tests and more tests

[The Vue cookbook real world example](https://vuejs.org/v2/cookbook/unit-testing-vue-components.html#Real-World-Example) explains that we can use a factory function to load in the PictureBlock each time we want to use it:

```js
const factory = (props = {}) => {
  return mount(PictureBlock, {
    propsData: {
      ...props,
    },
  })
}
```

Since filename and score are required anyway, we can better fill those in aswell so we have to write even less code.

```js
const dummyFilename = '123456onetwothree.png'

const factory = description => {
  return mount(PictureBlock, {
    propsData: {
      filename: dummyFilename,
      score: '23',
      ...description,
    },
  })
}
```

now `const wrapper = factory()` will mount the PictureBlock with the required props in it. Sweet!
