---
id: doc9
title: Arrow Functions
---

Arrow functions were introduced to JavaScript in 2015 with the introduction of ES6

Prior to arrow functions, a function could be written like this
```
function onSubmit() {
    console.log('success)
}
```

An equivalent to the above example function as a new arrow function would look like this
```
const onSubmit = () => console.log('success')
```
## Passing Props To An Arrow Function
If you would like to pass a prop to the function you would place it within the parantheses like this
```
const onSubmit = (prop) => console.log(prop)
```

## Anonymous Functions
It is not even necessary to declare a function name. Arrow functions can be used to create quick nameless functions called anonymous functions. Anonymous functions can be useful but use them wisely because they cannot be called anywhere else within your application due to the fact that they have no name. Observe the example of a button that makes use of an anonymous function below.
```
<button onClick={() => console.log('success')}>Click</button>
```

When the button is clicked, `success` will be printed to the console log. The function is created and passed to the onClick method all without the need to create a function outside of the button tag. This saves lots of time and results in way cleaner code.
