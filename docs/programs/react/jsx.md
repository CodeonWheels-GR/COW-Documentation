---
id: doc8
title: JavaScript XML (JSX)
---

JavaScript XML or JSX for short, is a syntax extension to the traditional JavaScript language. JSX allows the developer to use HTML tags within their JavaScript.

## Basic JSX Example

```
const heading = <h1>Text</h1>
```

When this constant is called the heading tag will be rendered

## Using JSX Expressions Within HTML Tags

To pass expressions within HTML tags place the expression within curly braces { }

You can pass variables within HTML tags like this

```
const text = "JSX is cool";
const heading = <h1>{text}</h1>;
```

You can even pass more complex expressions within the curly braces { } like this

```
const a = "The cat has ";
const b = 3;
const c = 1;

return(
        <h1>{ a + (b + c) + " mice" }</h1>
    )
```

This expression will return `The cat has 4 mice`

You can also pass objects through curly brackets { } like so

```
const work = {
    worker: "cashier",
    amount: 6
}

return(
    <h1>The {work.worker} has {work.amount} peaches</h1>
)
```

This will return `The cashier has 6 peaches`

## Self Closing Tags

With JSX, one self closing tag can be used instead of needing an opening and closing tag if the tag has no children.

```
<br />
```

## ClassName Attribute
With JS, it is common to apply a CSS style like this.
```
<h1 class="nameOfClass">Text</h1>
```

With JSX the attribute `className` is used instead of the attribute `class`.
```
<h1 className="nameOfClass">Text</h1>
```
