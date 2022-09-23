---
id: doc7
title: UseEffect Hook
---

The useEffect hook is used to run a "side effect" or function whenever the developer decides.

## How to Use a UseEffect Hook

This is what a generic useEffect hook looks like
```
useEffect(() => {
  **Code that runs everytime**
  **the conditional variable changes**
}, [variable])
```

To explain how to use a useEffect hook the example of a counter will be used again. The first thing to know when trying to make use of a useEffect hook is that you are going to need to import it into React before you can use it. To import a useEffect hook into React just add the following code to the top of your project. Note that the useState hook will also be imported for this example.

```
import { useEffect, useState } from "react";
```

Now that you have imported the useEffect and useState hooks, consider the following code

```
export default function App() {

const [number, setNumber] = useState(0)
const [count, setCounter] = useState(0)

useEffect(() => {
  setNumber(number + 2)
  console.log(number)
}, [count])


function incrementNumber() {
  setCounter(count + 1);
}

function decrementNumber() {
  setCounter(count - 1);
}

    return (
        <div className="App">
            <button onClick={incrementNumber}>+</button>
            <div>{count}</div>
            <button onClick={decrementNumber}>-</button>
        </div>
    )
}
```

Clicking either the positive or negative button will change the value of the variable `count`. What the useEffect hook does is whenever the value of the `count` variable changes, the code within the brackets { } executes. So in the instance of this example, the `setNumber` function executes which adds 2 to the value of the `number` variable. Then the `number` variable is printed to the console log. You should notice the console log printing a number incrementing by two everytime you click the negative or positive button.
