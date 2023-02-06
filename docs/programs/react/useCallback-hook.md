---
id: doc20
title: useCallback Hook
---

Sometimes, a function will cause a component to needleslly re-render. This can waste memory resources. Here is an example of a program that needlessly re-renders:

`Without useCallback Hook`

`App.js`
```
import React, { useState, useCallback } from 'react';
import List from './List.js'

const App = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false)

  const getItems = () => {
    return [number, number + 1]
  }

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }

  return (
    <div style={theme}>
      <input 
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>Theme</button>
    <List getItems={getItems} />
    </div>
  );
};

export default App;
}
```

`List.js`
```
import React, { useEffect, useState } from 'react';

export default function List({ getItems }) {
const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getItems())
    console.log('Updating Items')
  }, [getItems])
  return items.map(item => <div key={item}>{item}</div>)
}
```

Notice how `Updating Items` is logged both when the number is changed in the input box, as well as when the button is clicked to change the theme. The logging is expected when the input field number changes, however the component is needlessly re-rendering when the button is clicked to change the theme. To preserve resources, a useCallback hook can be used. Below is the same example using a useCallback hook:

`With useCallback Hook`

`App.js`
```
import React, { useState, useCallback } from 'react';
import List from './List.js'

const App = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false)

  const getItems = useCallback(() => {
    return [number, number + 1]
  }, [number])

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }

  return (
    <div style={theme}>
      <input 
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>Theme</button>
    <List getItems={getItems} />
    </div>
  );
};

export default App;

```
`List.js`
```
import React, { useEffect, useState } from 'react';

export default function List({ getItems }) {
const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getItems())
    console.log('Updating Items')
  }, [getItems])
  return items.map(item => <div key={item}>{item}</div>)
}
```
Now if you change the number within the input field the text will be logged as anticipated. Now though, when the button is clicked to change the theme the text will not be logged. This demonstrates that the component `List.js` is no longer being needlessly rendered.










