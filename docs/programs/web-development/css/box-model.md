---
sidebar_position: 3
sidebar_title: The Box Model
id: box-model
---

## What is the box model

Every Block on the web has a series of properties that is hidden and usable at any time. The following items are the properties that every block has.

## Width

```css
 {
	width: 20px;
}
```

## Height

```css
 {
	height: 20px;
}
```

## Borders

### Border Styles | border-style

```css
 {
	border-style: dotted;
	border-style: dashed;
	border-style: solid;
}
```

### Border Width | border-width

```css
 {
	border-width: 5px;
	border-width: thin;
	border-width: medium;
	border-width: thick;
	border-width: 25px 10px 4px 35px; /* 25px top, 10px right, 4px bottom and 35px left */
}
```

### Border Color | border-color

```css
 {
	border-color: red;
}
```

### Border Radius / Rounding Corners | border-radius

```css
 {
	border-radius: 5px;
}
```

## Margin

Kind of like an invisible force field outside the area of a block that tells the block how much space it should tak away in each direction.

```css
 {
	margin-top: 100px;
	margin-bottom: 100px;
	margin-right: 100px;
	margin-left: 100px;
}
```

## Padding

Very similar to the margin expect for this time the invisible force field is on the area inside of the box and pushes any content inside away from the border.

```css
 {
	padding-top: 50px;
	padding-right: 50px;
	padding-bottom: 50px;
	padding-left: 50px;
}
```
