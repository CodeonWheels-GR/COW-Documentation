---
id: doc14
title: Elements
---

*** image breaking down components & elements https://miro.medium.com/max/1024/1*rXrpYfSaJClrlNFaThFJrg.png ***

An element is the smallest unit that a developer can use to describe to the React DOM what they want to be rendered on the screen. Elements are used to create more units of code called components. Here is an example of an element:

```
const heading = <h1>Hello</h1>
```

In the above example, a constant is declared named `heading`. The constant is assigned the value of a heading tag. As you may have anticipated, when the constant `heading` is rendered the text `Hello` will be rendered on the screen. 

In React, elements are really object. To demonstrate this let's take a look at what an h1 tag returns when it is output to the console. 
```
console.log(<h1>Hello</h1>);
```

```
▽ {type: "h1", key: null, ref: null, props: Object, _owner: null…}
   type: "h1"
   key: null
   ref: null
 ▽ props: Object
  ▽ style: Object
      color: "white"
    children: "Hello"
 _owner: null
 _store: Object
```

The important thing to pay attention to is the `type`, `color`, and `children` keys. As you can see the object describes exactly what the element is. The type of element is an h1 tag, the text `Hello` is passed through as the child of the h1 tag and the text is styled with the color white!






