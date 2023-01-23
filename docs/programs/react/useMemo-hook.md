---
id: doc18
title: useMemo Hook
---

Occasionally in React, a developer will create a funtiton that is very costly on resources. When ran, this function will slow down the entire application, however the function is necessary to the application. To have the application run as efficiently as possible, the developer can take advantage of a useMemo hook so that the function will only run when a specified dependency has changed. Observe the example below:

`not using hook`
```
import React, { useState } from "react";

export default function App() {
  const [color, setColor] = useState(true);
  const [text, setText] = useState('')
  const repeatText = slowFunction(text)

  const fontStyle = {
    color: color ? "black" : "white",
    backgroundColor: color ? "white" : "black"
  };

  function slowFunction(text) {
    //Something that is slow
    console.log('slow')

    return text + ' ' + text
  }

  return (
    <div className="App">
      <input input={text} onChange={e => setText(e.target.value)}></input>
      <button onClick={() => setColor((prevColor) => !prevColor)}>
        Click To Change Color
      </button>
      <div style={fontStyle}>{repeatText}</div>
    </div>
  );
}
```

The above example will give you an input box and a button. When you type something into the input box, the text will appear twice on the line below. When you click the button the background color and font color will change. If you look at your console you will notice that everytime you change the text in the input box or click the button, the string `slow` will be printed into the console. This is because a function called `slowFunction` is being called every single time the text within the input box changes. Right now the only thing that is happening in this function is that a string is being logged to the console and text is being reteurned twice so this does not slow down our application very much. Imagine if there was a very costly line of code somewhere in this function like a for loop that iterates hundreds of thousands of times. If this were the case then this would certainly slow down the application and it would be important that this function runs only when necessary. This is where a useMemo hook comes in handy. The example below makes it so `slowFunction` only gets called when a dependency we specify changes. In this instance, that dependency will be when the text input to the input box changes.

`using hook`
```
import React, { useState, useMemo } from "react";

export default function App() {
  const [color, setColor] = useState(true);
  const [text, setText] = useState('');
  const repeatText = useMemo(() => {
    return slowFunction(text);
  }, [text]);

  const fontStyle = {
    color: color ? "black" : "white",
    backgroundColor: color ? "white" : "black"
  };

  function slowFunction(text) {
    //Something that is slow
    console.log("slow");

    return text + " " + text;
  }

  return (
    <div className="App">
      <input input={text} onChange={(e) => setText(e.target.value)}></input>
      <button onClick={() => setColor((prevColor) => !prevColor)}>
        Click To Change Color
      </button>
      <div style={fontStyle}>{repeatText}</div>
    </div>
  );
}

```

Notice that the only difference between the two examples is that instead of the constant `repeatText` being assigned `slowFunction` as a value, in the second example `repeatText` is assigned the value of the useMemo hook which returns `slowFunction`. Notice now that when the text within the input box changes the string is still outputted to the console. However when the button is clicked, the string is no longer being outputted to the console meaning that the function is no longer being executed anymore. Again, the useMemo hook is incredibly useful for making slow functions run only when necessary.










---
id: doc18
title: useMemo Hook
---

Occasionally in React, a developer will create a funtiton that is very costly on resources. When ran, this function will slow down the entire application, however the function is necessary to the application. To have the application run as efficiently as possible, the developer can take advantage of a useMemo hook so that the function will only run when a specified dependency has changed. Observe the example below:

`not using hook`
```
import React, { useState } from "react";

export default function App() {
  const [color, setColor] = useState(true);
  const [text, setText] = useState('')
  const repeatText = slowFunction(text)

  const fontStyle = {
    color: color ? "black" : "white",
    backgroundColor: color ? "white" : "black"
  };

  function slowFunction(text) {
    //Something that is slow
    console.log('slow')

    return text + ' ' + text
  }

  return (
    <div className="App">
      <input input={text} onChange={e => setText(e.target.value)}></input>
      <button onClick={() => setColor((prevColor) => !prevColor)}>
        Click To Change Color
      </button>
      <div style={fontStyle}>{repeatText}</div>
    </div>
  );
}
```

The above example will give you an input box and a button. When you type something into the input box, the text will appear twice on the line below. When you click the button the background color and font color will change. If you look at your console you will notice that everytime you change the text in the input box or click the button, the string `slow` will be printed into the console. This is because a function called `slowFunction` is being called every single time the text within the input box changes. Right now the only thing that is happening in this function is that a string is being logged to the console and text is being reteurned twice so this does not slow down our application very much. Imagine if there was a very costly line of code somewhere in this function like a for loop that iterates hundreds of thousands of times. If this were the case then this would certainly slow down the application and it would be important that this function runs only when necessary. This is where a useMemo hook comes in handy. The example below makes it so `slowFunction` only gets called when a dependency we specify changes. In this instance, that dependency will be when the text input to the input box changes.

`using hook`
```
import React, { useState, useMemo } from "react";

export default function App() {
  const [color, setColor] = useState(true);
  const [text, setText] = useState('');
  const repeatText = useMemo(() => {
    return slowFunction(text);
  }, [text]);

  const fontStyle = {
    color: color ? "black" : "white",
    backgroundColor: color ? "white" : "black"
  };

  function slowFunction(text) {
    //Something that is slow
    console.log("slow");

    return text + " " + text;
  }

  return (
    <div className="App">
      <input input={text} onChange={(e) => setText(e.target.value)}></input>
      <button onClick={() => setColor((prevColor) => !prevColor)}>
        Click To Change Color
      </button>
      <div style={fontStyle}>{repeatText}</div>
    </div>
  );
}

```

Notice that the only difference between the two examples is that instead of the constant `repeatText` being assigned `slowFunction` as a value, in the second example `repeatText` is assigned the value of the useMemo hook which returns `slowFunction`. Notice now that when the text within the input box changes the string is still outputted to the console. However when the button is clicked, the string is no longer being outputted to the console meaning that the function is no longer being executed anymore. Again, the useMemo hook is incredibly useful for making slow functions run only when necessary.











