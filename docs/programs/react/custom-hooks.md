---
id: doc17
title: Custom Hooks
---

React even allows you to create your own custom hooks. To create a custom hook, simply create a separate .js file with the function that you want to run, then export that function much like creating a component with React. Then import that function to whichever file you would like to use the hook on. Below is a very simple example of a custom hook.

`doubleNumber.js`
```
const doubleNum = (num) => {
  let numDoubled = num*2
  return numDoubled;
}

export default doubleNum;
```

`app.js`
```
import doubleNum from "./doubleNumber";

export default function App() {
  console.log(doubleNum(5))
}
```

All this hook does is take an integer as an input and return that input doubled. When this code is ran you will see whatever value is passed to the `doubleNum` hook is printed to the console doubled. This is a very simple example however the possibilities are limitless when it comes to cusotm hooks.











