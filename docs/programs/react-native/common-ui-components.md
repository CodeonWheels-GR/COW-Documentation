---
id: doc3
title: Common UI Components
---

In standard React JS, developers are very familiar with using HTML tags to define the layout of a page. For example, a developer would commonly use a `<div>` tag to group content, a `<p>` tag to display text, or an `<img>` tag to display an img. In React Native, this is slightly different. Listed below are the UI components that are the most commonly used to create a mobile application with React Native.

## View Component

The `<View>` component is most comparable to a `<div>` tag in React JS. As a developer, you will use this component to group content. The one thing to note with the `<View>` component is that in iOS and Android mobile application, if content overflows the screen size then it is not possible to scroll with only a `<View>` tag. To be able to scroll the next tag listed is necessary.

## ScrollView Component

The `<ScrollView>` component is also comparable to a `<div>` tag in React JS. The main difference between a `<View>` and `<ScrollView>` component is that if the contents within a `<ScrollView>` component overflow outside of the screen size on a mobile application, the user will be able to scroll to see the remaining content. With `<View>` components scrolling is not possible. For this reason it is very important to wrap all content within a `<ScrollView>` component.

## Text Component

The `<Text>` component is used to display text and is comparable to a `<p>` tag in React JS. If you are familiar with React JS then you will have no issues using this component as it is pretty much identical to a `<p>` tag.

## TextInput Component

The `<TextInput>` component is comparable to the `<Input>` tag in React JS. A developer would use this component when they are looking to gather input from the user. Think the input fields within a contact form.

## Image Component

The `<Image>` component is used to render images to the screen so it comes as no surprise that this component is idential to an `<img>` tag in React JS.

