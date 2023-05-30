---
id: doc19
title: useContext Hook
---

Sometimes, a prop will need to be passed throughout numerous components so that the value can be used in only the last component. Without a useContext hook, this is traditionally done through a process called `prop drilling` where the state is passed down through each arrow function even though it is only needed in the first and last arrow functions. Below is an example of passing state between functions in this way:

`Without useContext Hook`
```
import React, { useState, useMemo } from "react";

export default function App() {
  const Function1 = () => {
    const [age, setAge] = useState(19);

    return (
      <>
        <div>{`Jalen is ${age}`}</div>
        <Function2 age={age} />
      </>
    );
  };

  const Function2 = ({age}) => {
    return (
      <>
        <div>Function 2</div>
        <Function3 age={age} />
      </>
    );
  };

  const Function3 = ({age}) => {
    return (
      <>
        <div>Function 3</div>
        <div>{`Jalen is ${age} still`}</div>
      </>
    );
  };

  return Function1()
}
```

While this method works, it can lead to lots of needless code. There is a better more efficient way to achieve the same result as the above code. This is done by taking advantage of the useContext hook as shown below:

`With useContext Hook`
```
import React, { useState, createContext, useMemo, useContext } from "react";

const Context = createContext();

export default function App() {
  const Function1 = () => {
    const [age, setAge] = useState(19);

    return (
      <>
        <Context.Provider value={age}>
          <div>{`Jalen is ${age}`}</div>
          <Function2 />
        </Context.Provider>
      </>
    );
  };

  const Function2 = () => {
    return (
      <>
        <div>Function 2</div>
        <Function3 />
      </>
    );
  };

  const Function3 = () => {
    const age = useContext(Context);

    return (
      <>
        <div>Function 3</div>
        <div>{`Jalen is ${age} still`}</div>
      </>
    );
  };

  return Function1();
}
```
Let's notice the differences between these two examples. In this second example, the `<div>` tags and the `<Function2>` component are wrapped in a `<Context.Provider>` component that passes on the state of the variable `age`. Then the function components being passed on in each of these arrow functions no longer need to be assigned the state. That is because in the last arrow function named `Function3`, a constant named `age` is assigned the value of `Context`. This achieves the same result as prop drilling but results in cleaner code.










