---
id: doc3
title: Functions
sidebar_label: Functions
---

## Declaring a Function

In way that's similar to the declaration of a Variable we begin the creation of a function by providing it a name.

```js
function myFirstFunction =
```

## Arguments

This following step is where we begin to change our structure. Because we want our functions to be able to process data and perform actions with material outside of it. We need a way to give it data that won't be declared inside. In order to achieve this we have the **Argument** which can be found in between a = and a =>. 

```js
function mySecondFunction = (var1, var2) =>
```

As seen in the example you can provide multiple data sources to the function through the use of commas. 

## Function Anatomy

Finally with the addition of a special set of character which we call an **Arrow**. Which looks like this =>. Alongside a set of Squiggly Brackets we finally have the full structure of what is called an Arrow Function.

```js
function mySecondFunction = (var1, var2) => {
    // Area where my code will go!
}
```

## Old Functions vs 'New' Functions

If you look around online it is very likely that you will run across functions that look like the function in the example below. Though there is nothing wrong with this function mixing the types of functions can lead to a lot of headaches unless you really know what you're doing. It is always possible to convert these 'Old' functions into Arrow functions.

```js
function mySecondFunction() = {

}
```