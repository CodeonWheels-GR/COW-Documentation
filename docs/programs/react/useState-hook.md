---
id: doc6
title: UseState Hook
---

The useState hook is the most commonly used React hook in a developers toolbox. This hook allows you to modify state within a functional component.

## How to Use a UseState Hook

To explain how to use a useState hook an example of a counter will be shown step by step. The first thing to know when trying to make use of a useState hook is that you are going to need to import it into React before you can use it. To import a useState hook into React just add the following code to the top of your project.

```
import { useState } from "react";
```

Next, we will declare our useState hook as well as the functions to increment and decrement the count

```
function ReactUseStateExample() {
    const [counter, setCounter] = useState(0)

    function incrementCounter() {
        setCounter(counter + 1)
    }

    function decrementCounter() {
        setCounter(counter + 1)
    }
}
```

At the very top of the function is where the useState hook is declared. The two variables (counter & setCounter) can be set to be any name that you choose. The first variable declared that is currently named counter represents the current state. The second variable declared that is currently named setCounter is a special variable because it is really a function and is what will be called when you want to change the state. Then on the right side of the equals sign is what the default state will be. In other words, this is what will be displayed by default before the state is changed.

Going down to the incrementCounter() funcion now, the setCounter function is called. All this does is take the value of whatever the variable counter happens to be at the time and adds one to it. The decrementCounter() function uses the exact same logic. It calls setCounter and takes whatever the value of the counter variable is at the time and subtracts one from it. This is how state changes.

Finally we will just create two buttons and a span tag so that the logic can be displayed. One button will be clicked when you want to increment the counter, another button will be clicked to decrement the counter, and the span tag is to display the current state of the counter.

```
function ReactUseStateExample() {
    const [counter, setCounter] = useState(0)

    function incrementCounter() {
        setCounter(counter + 1)
    }

    function decrementCounter() {
        setCounter(counter - 1)
    }

    return(
        <button onClick={decrementCounter}>-</button>
        <span>{counter}</span>
        <button onClick={incrementCounter}>+</button>
    )
}
```

Notice how the functions are passed to the HTML tags. the decrementCounter and incrementCounter functions are passed to their respective buttons through an event handler method called onClick. Essentially, what this method does is when one of the buttons are clicked, the decrementCounter function or incrementCounter function will run depending on which of the two buttons were clicked. Then the current state of the counter is displayed through span tags by putting the variable name counter within curly braces.