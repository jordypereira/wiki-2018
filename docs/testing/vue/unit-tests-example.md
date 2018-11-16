# Unit Testing Examples

## Test if it's a vue instance

I'm gonna test a simple component that takes 3 props and renders an image block:

```vue
<template>
  <div class="row justify-content-between">
    <div class="col-12 text-center">
      <img
        :src="`/storage/img/pictures/${filename}`"
        :alt="description"
        class="img-responsive img300"
      />
    </div>
    <div class="col-12 pl-4 text-center align-self-end">
      <h3 class="subheading mt-2">{{ score }}</h3>
      <p v-if="description">{{ description }}</p>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PictureBlock',
  props: {
    filename: {
      type: String,
      required: true,
    },
    score: {
      type: [Number, String],
      required: true,
    },
    description: String,
  },
}
</script>
```

The first test I wrote just tests if it's a vue component. This should always return true.

```js
test('is a Vue instance', () => {
  const wrapper = mount(PictureBlock, {
    propsData: {
      filename: dummyFilename,
      score: '23',
    },
  })
  expect(wrapper.isVueInstance()).toBeTruthy()
})
```

The reason I pass props with this simple test is because I'm using the required parameter inside the component. This is also a form of testing because I get an error message when it doesn't.

**If we don't pass a prop the test will pass but we get an error message.**

## Test if the HTML didn't change

Instead of testing if every line is what we expect it to be, we make a snapshot of the HTML and compare it with a previous snapshot.

```js
test('renders HTML correctly', () => {
  const wrapper = mount(PictureBlock, {
    propsData: {
      filename: dummyFilename,
      score: '23',
    },
  })
  expect(wrapper.element).toMatchSnapshot()
})
```

The first time you run it it takes the snapshot, saves it in `__snapshots__` and passes the test. If you change your html or the test you can [update the snapshot](https://jestjs.io/docs/en/snapshot-testing#updating-snapshots) with `u`

## Check if it uses the props you pass

Let's pass some props and see if they match our expectations.

```js
test('renders props correctly', () => {
  const wrapper = mount(PictureBlock, {
    propsData: {
      filename: dummyFilename,
      description: 'dummy text data',
      score: '23',
    },
  })
  const image = wrapper.find('img')
  const description = wrapper.find('p')
  const score = wrapper.find('h3')

  expect(image.attributes('src')).toBe(`/storage/img/pictures/${dummyFilename}`)
  expect(score.text()).toBe(wrapper.vm.score)
  expect(description.text()).toBe(wrapper.vm.description)
})
```

You can use a lot of ways to find the components you want to test. I mostly went through the [vue test utils wrapper doc](https://vue-test-utils.vuejs.org/api/wrapper/) to find some I could use. You can search on html tag, id or class.

## Don't render optional props we don't pass

We don't pass a description so don't even render the p tag.

```js
test("doesn't render props that aren't passed", () => {
  const wrapper = mount(PictureBlock, {
    propsData: {
      filename: dummyFilename,
      score: '23',
    },
  })
  const description = wrapper.find('p')

  expect(description.exists()).toBe(false)
})
```
