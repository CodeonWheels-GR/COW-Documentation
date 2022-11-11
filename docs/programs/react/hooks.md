---
id: doc5
title: React Hooks
---

React hooks are  very powerful tool that was added for developers as of React version 16.8. React hooks help developers move further away from class based development by allowing for the changing of state as well as other features without the need to write a class.

## Examples of Hooks
The most popular hooks are the useState and useEffect hooks however there are many more to explore and React JS even offers the ability for the developer to create their own custom hooks.

## Rules of Hooks

1) Hooks can only be called inside functional components<br />
2) Hooks can only be called at the top level of a component <br />
3) Hooks cannot be conditional

These three rules will now be elaborated on in detail for your understanding. First of all, hooks can only be called inside functional components because the entire purpose of hooks existing is to emulate what developers can already do with class based development. Since an equivalent method to achieve what hooks do already exist in class based components, it is not possible to use hooks within a functional component.

Next, hooks must be the very first things declared within your code.

Lastly, hooks must be executed in the order that they are declared. This is why hooks can not be inside of conditional statements because this would cause hooks to execute out of order. Refer to the example below that utilizes the very popular useState hook.
```
function ReactHooksExample() {

    if ( condition === true) {
        useState()
    }

    useState()
    useState()

}
```

In React, this would be considered invalid code and would return an error. This is because if the condition returns as false then the first useState will not be executed, resulting in the three declared useStates to be executed out of the order that they were declared in



