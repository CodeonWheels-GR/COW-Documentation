---
id: doc4
title: Basic Layout Tags
---

# Div | div

Divs are the basic catch all block for organizing content that doesn't serve a specific purpose. Need to organize some text boxes, use a div. Need to create a colored box, use a div!

```html
<div>
    <p> I'm inside the div </p> 
    <p> I'm also inside the div </p> 
</div>

<p> I'm outside the div 😢 </p> 

```

---

# Header | header

The Header Element acts as a place to organize material we want our users to be able to access right away. This organizing element usually holds the logo and navigation for a website.

```html
<header>
    <img src="logo.png"/> 
    <nav> </nav>
</header>

```
---

# Navigation | nav

The Navigation Container Element is the area in our website that is used to provide links to the other portions of the website. The purpose of having a separate element for the Navigation is to help bots and indexers read the website while creating a standard for quality.

```html
<nav>
    <a href="#"> Link 1 </a> 
    <a href="#"> Link 2 </a> 
</nav>

```
---

# Section | section

The Section Element is the perfect tag for organizing your code without the use of comments. It can aid in defining areas of your frontend and make the code easier to navigate.

```html
<section>
    <div>
        <h1> I'm inside the div </h1> 
        <p> I'm also inside the section </p> 
    </div>

    <div>
        <p> I'm inside the div </p> 
    </div>
<section>

```
---

# Footer | footer

The Footer can be very similar to the **Header** in some cases. It can hold links to other pages on the site, contain the company logo, and provide contact info. It stands out from the Header because it is usually used to hold Copyright and legal information related to data collection.

```html
<footer>
    <a href="#"> Link 1 </a> 
    <a href="#"> Link 2 </a> 
</footer>

```