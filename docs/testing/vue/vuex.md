# Testing API Calls from Vuex

To test and use a plugin like vuex we need to create a local vue state.

```js
import { createLocalVue } from '@vue/test-utils'

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use(MyPlugin)

// pass the `localVue` to the mount options
mount(Component, {
  localVue,
})
```

Or we can test the mutations and getters seperately as if they were normal functions.

The following mutation updates the score of a picture:

```js
upvote(state, { id, score }) {
  let updatedPicture = {
      ...state.pictures[id],
      score,
  }
  Vue.set(state.pictures, id, updatedPicture)
},
```

Since the state is just an object, we can load a fixture in and initialize it:

```js
export default {
  1: {
    filename: '1541424906_5be0470a4575e.png',
    id: 1,
    score: '2',
    user_id: 1,
    description: 'Dummy Text',
  },
}
```

We just load in the functions and the data, pass the current state and then we can test the updated state.

```js
import mutations from '../store/mutations'
import pictureFixture from './fixtures/picture'

describe('Upvote', () => {
  it('adds 1 to the picture score', () => {
    const state = { pictures: pictureFixture }

    mutations.upvote(state, { id: 1, score: '3' })

    expect(state.pictures[1].score).toEqual('3')
  })
})
```
