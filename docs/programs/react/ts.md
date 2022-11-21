---
id: doc12
title: TypeScript (TS)
---

*** TS logo image https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo.png ***

TypeScript is a programming language that shares the same general syntax of JavaScript, TypeScript adds additional syntax called for types. As mentioned, TypeScript has the same syntax as JavaScript for the most part. The important difference is that in TypeScript the type of each variable is defined. Once the variable's type is defined you cannot assign a value of another type to that variable. The three basic types in TypeScript are `boolean`, `number`, and `string`. Booleans are true or false, numbers can be whole or floating point integers, and finally strings are for text.

Below is an example of how to use TypeScript:
```
let favColor: string = "yellow"

favColor = 4
``` 

As you can see, the variable `favColor` is assigned the type `string`. This code will result in an error because the variable `favColor` is expecting a string however it gets assigned the number `4`

### Type Assignments
TypeScript assigns types to variables in two different ways. One way is through explicit typing and the other is implicit typing. An implicit type is when a type is not explicitly stated. The type then must be inferred based off of the value the variable is assigned to. It is good practice with TypeScript to explicitly state types as much as possible. Here is an example of implicit typing:
```
let age = 9 

age = "34"
```
This code will result in an error because since the variable `age` is assigned the value `9`, number is the implicit type applied. Therefore a variable with the type number cannot be assigned to a value with the type of string.

Explicit typing is when you state the type of the variable in code. Here is an example of a variable with an explicit type:
```
let age: number = 9 
```
As you can see we have the same age variable but this time it gets explicitly assigned the type of number. 

### Arrays
Types for arrays are declared in TypeScript like this:
```
const birds: string[] = []
birds.push(3)
```
The array `birds` was assigned the type of string. When the value `3` gets pushed to the array an error will occur because the array is expecting values with the type of string.

### Objects
The types for all the properties on an object must be stated with TypeScript. Here is an example of how to declare an object with TypeScript:
```
const person: { name: string, eyeColor: string, over18: boolean } = {
    name: "Bill".
    eyeColor: "Blue",
    over18: true
}
```
This code works in TypeScript. The property `name` is explicitly stated as the type string and is assigned the string `Bill`, the property `eyeColor` is explicitly stated as the type string and is assigned the string "Blue", lastly the property `over18` is explicitly stated as the type `boolean` and is assigned the value `true` which is a boolean.

### Functions
The return type must be explicitly stated for a function with TypeScript. Additionally, the type of any properties must also be explicitly stated. Here is an example of a function that explicitly states the types for both the function return as well as the properties:
```
function addOne(input: number) {
    newNumber: number = input + 1

    console.log(input + " plus " + 1 " =" + number)
}
```
The property `input` and the variable `newNumber` are expecting a value of to be input of the type number. If value input is any type other than a number the code will return an error.






