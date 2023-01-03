---
id: doc16
title: Memos
---

*** image breaking down components & elements https://miro.medium.com/max/1024/1*rXrpYfSaJClrlNFaThFJrg.png ***
Sometimes components will needlessly re-render causing performance issues. To avoid this, a developer can use memos. Memos are a way to tell a component to not re-render if it has not changed at all. Below is an example of how to use a React memo!

`app.js`
```
import Counter from "./counter";
import "./styles.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState('');

  return (
    <div className="App">
      <Counter />
      <h1>Hello {name}</h1>
      <input onChange={(e) => setName(e.target.value)}></input>
    </div>
  );
}

export default App;
```

`counter.js`
```
import { memo, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  function decrementCounter() {
    setCounter(counter - 1);
  }

  return (
    <>
      <button onClick={decrementCounter}>-</button>
      <p>{counter}</p>
      <button onClick={incrementCounter}>+</button>
    </>
  );
}

export default memo(Counter);
```

Notice that there are two files: `app.js` and `counter.js`. The second file `counter.js` is the child component to the first file `app.js`. This is a simple application with a counter and a textbox. If you click the plus or minus buttons then the number displayed will increment or decrement depending on which button is pressed. Additionally, whatever is input into the textbox will be displayed. For example if I enter `Geraldo` into the textbox, then `Hello Geraldo` will be displayed on the screen. Normally, since the `counter.js` file is a child component of `app.js` if what is inputted into the textbox is changed this will cause a re-render. This re-render will force the `counter.js` component to re-render even if the plus or minus button has not been pressed. As mentioned this can be wasteful on resources. 

To combat this and make processes more effecient a developer can export a component as a memo. Notice at the bottom of the `counter.js` component there is the line of code `export default memo(Counter);`. This tells react to only re-render this component if something is changed within it. In practical terms, this component will only render if the plus or minus button is clicked, causing the number that is displayed on screen to change. If this does not happen then React will know that a re-rendering of this component is unnecessary which make the application more effecient!









