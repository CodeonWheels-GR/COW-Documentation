---
id: doc10
title: Ternary Operator
---

*** ternary operator cheat sheet image https://res.cloudinary.com/practicaldev/image/fetch/s--6KFkGVIh--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rn8ecbvghqyulclj0m42.png ***

Ternary operators were introduced to JavaScript in 2015 with the introduction of ES6

Ternary operators are a shortened way to write if/else statements. Before ternary operators, an if/else statement may be written like this
```
if (value === true) {
  console.log('success')
}
else {
  console.log('failure')
}
```

This above if/else statement can be shortened with a ternary operator like this
```
value === true ? console.log('success') : console.log('failure')
```

To better understand ternary operators look at this generic ternary operator
```
[conditional] ? [if true expression] : [ if false expression ]
```

Just like with a standard if/else statement, the conditional in this instance is whether or not the `value` variable is equivalent to true. If the expression returns true then the console will output the string `success`. If the expression returns false then `failure` will be outputted to the console.



