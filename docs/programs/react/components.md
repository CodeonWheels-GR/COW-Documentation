---
id: doc2
title: What Are Components?
---

Components at their core are just functions. They are reusable pieces of code that represent a part of an overall user interface.

## Issue With Building a Non-Component Based Site
If you wanted to create a simple form to gather user information it might look similar to this
```
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

This is fine if you only will be using this form a couple of times on your webpage, but what if you need to use this form many times? It would become redundant to type the same code in over and over again. This is where components come in handy. You only need to write the code one time and then you can call that component whenever you need.

## How to Create a Component
As mentioned above, creating a component is the same declaring a new function! Below is an example of the above form written out as a component

```
function InputForm() {
    return(
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default InputForm;
```

Now all you would need to do is call the InputForm component whenever you want it to be rendered. Here is an example of how to render the InputForm component

```
<h1>I am going to render the InputForm component below this text</h1>
<InputForm />
```

The form will render below the heading text the same as it would if you typed the code out in its entirety!
