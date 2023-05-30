---
id: doc4
title: Styling Elements
---

Styling elements within your React Native UI is a bit different than how it is done in React JS. Do not worry though because it is not all that different. In React JS there are two ways to style an element. You can create a CSS stylesheet and then pass the styles to the `className` prop or you can define individual stylings to the `style` prop. With React Native, all styling will need to be passed to the style prop. It would become tedious very quickly to have to style everything individually so the best approach is to create a constant that passes the styles so all that you need to do is pass a class name to the style prop.

## Creating Stylesheet to Pass to Style Prop
Take a look at this example code
```
<Text text="React native is fun!" />
```
Right now this component adds text to the UI as anticipated however we want to add some styling to it. As mentioned previously, we could simply add the in line style like this
```
<Text text="React native is fun!" style={{ color: 'red', backgroundColor: 'blue' }} />
```

Now let's take it one step further to do it the proper way and create a stylesheet to pass to the style prop
```
const textColoring: TextStyle = {
    background-color: blue;
    color: red;
}

return(
    <Text text="React native is fun!" style={textColoring} />   
)
```
Regardless of if a stylesheet is created or in line styling is performed the impact on the UI should be the same, resulting in the text turning red and the background turning blue.

## Style Type Validation
Notice in the above example that `TextStyle` is added at the end of the constant name. This is necessary when creating stylesheets as it helps to validate what the style will be used on. The three style types that you will most commonly run into are `TextStyle`, `ImageStyle`, and `ViewStyle`. TextStyle is for when you want to style text, ImageStyle is for when you want to style images, and lastly ViewStyle is for when styling `<view>` tags.
