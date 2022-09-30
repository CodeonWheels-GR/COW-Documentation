---
id: doc11
title: Spread Operator
---

Spread operators were introduced to JavaScript in 2015 with the introduction of ES6. Spread operators enable a developer to quickly push all of an existing array or object into another array or object. Observe the examples below
```
const array1 = [ 0, 1, 2, 3 ]
const array2 = [ 4, 5, 6, 7 ]
const array3 = [ ...array1, ...array2 ]

console.log(array3)
```
In this example, everything in `array1` and `array2` is copied over into a new array called `array3`. The contents of `array3` are then displayed to the console.


```
const cat = {
    furLength: 'short',
    furColor: 'black',
    age: 6
}

const moreCatInfo = {
    cute: true,
    personality: 'friendly',
    age: 9
}

const updatedCat = {...cat, ...moreCatInfo}

console.log(updatedCat)
```
In this example nearly all of the name value pairs from the object `cat` and the object `moreCatInfo` are copied over to the new object `updatedCat`. The original age value `6` from the `cat` object has been replaced by the age value `9` from the `moreCatInfo` object. When the same name variables are being pushed into a new object, the value from the object that is listed last in the expression is the value that will be copied to the new object. Since `moreCatInfo` is after `cat`, the value `9` gets pushed into the `updatedCat` object and printed to the console.





