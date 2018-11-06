## Functions - 20 min.

- codepen.io

### Call a function

> function is a verb - actionword - e.g. a dog

- run()
- jump()
- sit()
- bark()

The browser knows some functions

- alert()
- alert('Hello')

> pass along a piece of data -> an argument  
> Or make your own functions

- greet()

### Create a function

> How do you create your own function?

```js
function greet() {
  alert('Hello my name is Jordy.')
}
```

```js
const greet = () => {
  alert('hello')
}
```

To run the function we have to call it `greet()`

> We taught the browser a new trick - a new function

### Parameters

- greet('Jane')
- greet('John')

```js
function greet(text) {
  alert('Hello my name is ' + text + '.')
}
```

> text, x, theName, ...

```js
function greet(text, favColor) {
  alert(
    'Hello my name is ' + text + ' and my favorite color is ' + favColor + '.',
  )
}
```

- greet('name', 'blue')

> A function doesn't have to call alert, it can return a new value

```js
  function tripleMe(x) {
    return 3 \* x
  }
```

`let myFavoriteNumber = tripleMe(12)`  
`alert(myFavoriteNumber)`
