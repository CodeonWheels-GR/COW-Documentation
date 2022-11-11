---
id: doc3
title: Basic Content Tags
---

# Headings

Headings are kind of an old term but it's not hard to grasp their purpose at all. Headings are titles used to organize your content, simple as that!

## Headings | h1-h6
However, Headings do have one interesting aspect that most other tags don't have. Unlike other tags Heading Elements have multiple scales in size depending on which number you select to follow the **h** in the element. 

```html

<h1> I'm very important! </h1> 
<h2> I'm important!  </h2> 
<h3> I'm sort of important </h3> 
<h4> I'm less Important </h4> 
<h5> I'm here </h5>
<h6> I'm not Important 😭 </h6>  

```
---

# Body

Body Elements are used to display text in its very basic forms. Plain text can be displayed through the use of the p element, italics with i, and bolded text with b.

## Paragraph | p

```html
<p> I'm text </p> 
```

## Italics | i

```html
<i> I'm italicized </i> 
```

## Bold | b

```html
<b> I'm bolded </b> 
```

---

# Links

Links don't work out of the box like the other content tags we've learned so far. In order to make them work we have to use [Element Attributes](../html/doc2) in order to provide a link to the Link Element. This is because the space for the content is used to label the link while attribute provides the location the link will take you.

## Link | a

```html
<a> I don't work yet </a> 
```

### href=""

By placing the **href** line inside of our starting tag specifically after the Element. We are able to provide a location for the browser to go once the Link is Clicked or Tapped on.

```html
<a href="https://www.google.com/"> I send you to Google </a> 
```

---

# Images

The Image Element is one of the most special tags in HTML. This is because it only uses a single Tag and requires an Element Attribute to work.

## Image | img

```html
<img/> 
```

### src=""

In order to provide a source for the image the *src* Attribute needs to be used.

```html
<img src="https://227263-694567-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/12/Among-Us-Red-Crewmate.png"/> 
```

---

# Lists

List Elements are great for displaying multiple points without having to go through the pain of formatting plain text to look as good.

## List Item | li

On it's own the list item element is exactly the same as the paragraph element.

```html
    <li> I am a lonely list item </li>
```

## Ordered List | ol

When list items are nested inside the **Ordered List** Element they become points in a series of numerical order.

```html
<ol>
    <li> List Item </li>
    <li> List Item </li>
</ol>
```

## Unordered List | ul

When list items are nested inside the **Unordered List** Element they become points in a series of bullet points.

```html
<ul>
    <li> List Item </li>
    <li> List Item </li>
</ul>
```

---