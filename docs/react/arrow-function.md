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
const onSubmit = () => {
    console.log('success')
  }
```

If you would like to pass a prop to the function you would place it within the parantheses like this
```
const onSubmit = (prop) => {
    console.log(prop)
  }
```

