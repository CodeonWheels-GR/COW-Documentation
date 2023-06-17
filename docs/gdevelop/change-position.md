---
id: change-position
title: Change Position
sidebar_position: 37
---

# Change Position

The "Change position" action in GDevelop allows you to modify the position of an object in your game. This action is commonly used to move objects around the screen or reposition them based on certain conditions or events.

## Using the "Change position" action

To use the "Change position" action, follow these steps:

1. Select the object you want to modify the position of in the **Objects** editor.
2. Open the **Events** editor and create a new event or choose an existing one where you want to trigger the position change.
3. Add a new action to the event by clicking on the **Add action** button.
4. In the action editor, choose the object you want to modify from the dropdown menu.
5. Select the **Change position** action from the list of available actions.
6. Specify the new position for the object using either absolute coordinates or relative values.
   - Absolute coordinates: Enter the X and Y coordinates directly to set the object's position on the screen.
   - Relative values: Use expressions or variables to calculate the new position based on the current position or other factors.
7. Save the action and test your game to see the object's position change according to the specified values.

## Example: Moving a character with arrow keys

Let's say you have a character [sprite](./sprites.md) in your game, and you want to move it horizontally when the player presses the left or right arrow keys. You can achieve this using the "Change position" action combined with keyboard events.

Here's an example event setup:

1. Create a new event and choose the keyboard event category.
2. Add a condition for the left arrow key press event.
3. Add an action to the event, select the character object, and choose the "Change position" action.
4. Set the X position to an expression that subtracts a certain value from the character's current X position.
   - Example: `Character.X() - 5`
5. Repeat steps 2-4 for the right arrow key press event, but this time add a value to the character's X position instead.
   - Example: `Character.X() + 5`

By using the "Change position" action in combination with keyboard events, you can enable the player to move the character left and right within the game.

Experiment with different values and conditions to achieve the desired movement effect for your objects.

That's it! You've learned how to use the "Change position" action in GDevelop to modify the position of objects in your game.
