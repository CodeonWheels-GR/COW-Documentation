---
sidebar_position: 2
sidebar_title: CSS Syntax
id: syntax
---

## Connecting to HTML

Before even getting to use CSS you have to prepare you environment to use CSS. Depending on the way you're building your site you'll have to select from different methods to inject the CSS into your website. In our case Codepen does most of the work and doesn't require us to do any extra work to have our CSS function.

## Selectors

In CSS there is two primary ways to control which blocks of HTML are being effected by your Styling. The first is by selection through tags, which are either a Class or ID. The second method is directly controlling every type of a certain element.

### Class

With the Class Selector we are selecting an item that will work based on two assumptions.

1. It is important enough to have its own style.

2. It will be used multiple times in the website.

In the example below we've selected Class A from a theoretical school. With choosing the class we can directly effect every student (or child) inside of Class A.

```html
<p class="classA"></p>
```

```css
.ClassA {
}
```

### ID

With the ID Selector we are selecting an item that will only show up once on our website.

In the example below we've selected Student A from a theoretical school. With choosing the ID we only directly effect this one student (or child) inside of the entire school.

```html
<p id="studentA"></p>
```

```css
#studentA {
}
```

### Element

Taking a step back from the school analogy, the element selector simply chooses every instance of the element we select with. In the example below every _Paragraph_ element is given the color blue without discrimination. Though this may make styling the entire website easy, doing this for every element can lead to a lot of head aches and issues because of how broad it is.

```css
p {
}
```

## Brackets

There really isn't much to dig into with the Brackets. They hold the instructions that we'll provide to our selector but not do much more in Plain CSS.

## Properties

The property portion of the CSS Syntax gives the CSS instructions on what properties to change about an HTML block based on what is defined inside of the brackets of the selector.

```css
{
 background-color:
    color:
    width:
    height:
}
```

## Property Values

In order to have properties function as intended you have to provide values in order for the line of code to properly compile. This can be a Color Name, Number, or Hexadecimal code.

```css
 {
	:red ;
	:24px ;
	:30deg ;
}
```

## Proper Syntax

```css
.redBox {
	background-color: red;
	width: 50px;
	height: 50px;
}
```
