---
title: What to test
tags: [Vue, Javascript, Testing]
date: 2018-10-09
---

# What to test

Just passing a prop and checking if the output is right is actually not a good test to do.  
We should trust vue to render the props correctly. Also if we change any html tags in our code the test will fail.
[Common Tips by Vue Test Utils](https://vue-test-utils.vuejs.org/guides/common-tips.html) explains what we should focus on.

- use shallowMount instead of mount, this doesn't render child components.
- test input and output. So use the tools provided by vue test utils to trigger events.

```js
wrapper.vm.$emit('foo')
wrapper.vm.$emit('foo', 123)

/*
`wrapper.emitted()` returns the following object:
{
  foo: [[], [123]]
}
*/
expect(wrapper.emitted().foo).toBeTruthy()
```

or test a child event

```js
wrapper.find(ChildComponent).vm.$emit('custom')
expect(wrapper.html()).toContain('Emitted!')
```
