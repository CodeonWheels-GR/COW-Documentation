---
id: doc1
title: Javascript Syntax
sidebar_label: Syntax
---

## Declarations

```js
var number = 2;
let name = 'Jerry';
const numberList = [1, 12, 14, 24];
```

## Scoping Vocab

In order to keep things organized inside of our code so that the computer doesn't have a Stroke the practice of **Scoping** is used to organize data and functions into neat little packages. From there you can program the packages to communicate with each other in order to get your program to work.

The following Examples will cover the symbols used to organize content in JavaScript.

### Brackets

Usually used with **Arrays** Brackets  

```js
const numberList = [1, 12, 14, 24];
```

### Squiggly Brackets

In most cases Squiggly Brackets will be used to contain the properties, classes, and methods of a function. Outside of this use case you'll run across using them as a container for data passed through JSX later in the course.

tldr; Squiggly Brackets are used to hold data.

```js
function numberList = name => {};
```

### Parenthesis

The most common use case for **Parenthesis** in JavaScript is its use in **Arrow Functions** to pass an argument to functions. 

```js
function numberList = (name) => { };
```

### Quotation Marks

The most common use case for **Quotation Marks** is for containing data that will be stored in Strings

```js
let name = "Henry";
```

:::tip Single VS Double Quotes

Even though they work the same way it's always smart to only use one type when writing out your programs. Using both at random can lead to bad code and break things which will be hard to fix.

:::



