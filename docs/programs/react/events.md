---
id: doc15
title: Events
---

*** Nice graphic listing some events https://res.cloudinary.com/practicaldev/image/fetch/s--bQsgArWc--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8uhg90p5p1x2zznc7dve.png ***
React has several event listeners which can perform actions based on when a user performs a certain event. Events in React are very similar to how HTML DOM events work with a few subtle differences.

### React Event Differences
The first difference with events in React is that events are typed out in camel case. For example, instead of using `onclick` you would use `onClick`.

The only other difference is that the React event handler is written with curly braces as opposed to quotation marks. For example, instead of `onClick="event"` the syntax would be `onClick={event}`.

### React Event Example
Say we wanted a button that incremented the state of a count variable everytime the button was clicked, this is how it would be done using React events:

function ReactEventExample() {
    const [counter, setCounter] = useState(0)

    function incrementCounter() {
        setCounter(counter + 1)
    }

    <button onClick={incrementCounter}>+1</button>
    <div>{counter}</div>
}

As you can see when the button is clicked, the onClick event will fire the `incrementCounter` function which will increment the state of the counter by one!

### React Event With Asynchronous Arrow Functions
It is possible to pass asynchronous arrow functions to the event handler. This makes for much cleaner code. Here is an example that has the exact same outcome as the above example, just with less code:

function ReactEventExample() {
    const [counter, setCounter] = useState(0)

    <button onClick={() => setCounter(counter + 1)}>+1</button>
    <div>{counter}</div>
}
