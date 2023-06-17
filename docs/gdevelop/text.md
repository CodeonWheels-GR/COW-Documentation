---
id: text
title: Text
sidebar_position: 13
---

# Text

In GDevelop, you can use the Text object to display text in your game or application. The Text object allows you to customize the font, size, color, and other properties of the displayed text.

## Adding a Text Object

To add a Text object to your scene, follow these steps:

1. Open the Scene Editor by selecting the scene where you want to add the Text object.
2. Click on the "Add Object" button in the toolbar.
3. In the object library, search for "Text" or navigate to the "Text" category.
4. Click on the Text object to add it to your scene.

## Customizing Text Properties

Once you've added a Text object to your scene, you can customize its properties using the Object Properties panel. Here are some of the common properties you can modify:

- **Text**: Set the text content that will be displayed.
- **Font**: Choose the font family for the text.
- **Font Size**: Adjust the size of the text.
- **Color**: Set the color of the text.
- **Alignment**: Specify how the text should be aligned (e.g., left, center, right).
- **Bold/Italic**: Toggle the bold or italic styling for the text.

You can experiment with different settings to achieve the desired look for your text.

## Displaying Dynamic Text

GDevelop also allows you to display dynamic text by using variables or expressions. This enables you to show information that changes during gameplay, such as the player's score or the remaining time.

To display dynamic text, you can use the "Set text" action in the Events Editor. This action allows you to set the text of a Text object to a variable or an expression result. You can combine text with variables or expressions using the concatenation operator (+) or the Text object's built-in expressions.

For example, to display the player's score, you can use an action like this:

Set text of TextObject to "Score: " + ToString(VariableString(score))

:::tip

Make sure to replace "TextObject" with the name of your Text object and "score" with the name of your score variable.

:::

## Conclusion

With the Text object in GDevelop, you have the flexibility to display customized and dynamic text in your game or application. Experiment with different font styles, sizes, and colors to create visually appealing text elements.
