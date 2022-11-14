---
id: doc2
title: HTML Syntax
---

# Elements

Being a Markup Language HTML works by telling the browser which type of blocks to render. This is done by providing the browser Elements, some of which are represented as the acronyms seen in the example below.

Just like elements in the periodic table each element in HTML has it's own properties that make the rendered block behave a certain way.

- a
- h1
- p 
- div
- body
- img
- ul 
- li

:::note

By themselves Elements won't work to render anything in the browser other than text. In order to have functioning elements we need to place them inside of tags.

:::


# Tags 

To create HTML tags all you need to do is surround the Element with the **Less Than Sign <** before the Element and a **Greater Than Sign >** afterwards.

The following are all the elements listed above as HTML tags.

```html

<a> <h1> <p> <div> <body> <img> <ul> <li>         

```

---

# Starting Tag

Just like all languages, HTML is a language and has a set of rules to follow. In the same way the we capitalize the first letter of a sentence and end it with some form of punctuation. HTML has a system where you instruct the browser on where a block starts and ends. 

In the model below is an example of a starting tag by itself. Without content or a place to end nothing is displayed when we display this in the browser because it is blank

```html

<h1>

```

---

# Content

To make something render in the browser we need to add content to the code. This usually comes in the form of text or links. 

```html

<h1> Hello World

```

---

# Closing Tag

To finally build a full HTML Block the block needs it's ending punctuation. Which in this case is exactly the same as the way we started our HTML block but with a **Forward Slash /** placed right before our element but after the **Less Than** Symbol. 

```html

</h1>

```

Just like the Starting Tag the Closing Tag does nothing on it's own. However when we finally put the Starting and Closing tag together around the content we finally have a fully rendered block on our page! 

```html

<h1> Hello World </h1>

```

:::note

Single Tags exist and are usually represented in the following format. Here both the starting and ending tag are blended together because certain Elements are not required to have a starting and ending tag.

:::

```html

<img src="http://some-picture-I-found.jpg" />

```
