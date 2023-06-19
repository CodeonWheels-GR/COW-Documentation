---
id: hide-reveal
title: Hide & Reveal
sidebar_position: 2
---

# Hide & Reveal

In GDevelop, you can control the visibility of objects in your game using the "Hide" and "Reveal" actions. These actions allow you to show or hide objects during gameplay based on certain conditions.

## Hiding an Object

To hide an object during the game, you can use the "Hide" action. This action is commonly used when you want to temporarily remove an object from the screen.

1. Select the object you want to hide.
2. In the events editor, add a new event or choose an existing event where you want to hide the object.
3. Add an action to the event and choose the "Hide" action.
4. Select the object you want to hide from the list of available objects.

Once the "Hide" action is executed, the object will no longer be visible on the screen.

## Revealing an Object

To reveal a hidden object, you can use the "Reveal" action. This action is used to make a hidden object visible again during gameplay.

1. Select the object you want to reveal.
2. In the events editor, add a new event or choose an existing event where you want to reveal the object.
3. Add an action to the event and choose the "Reveal" action.
4. Select the object you want to reveal from the list of available objects.

When the "Reveal" action is executed, the object will become visible on the screen again.

## Example Usage

Here's an example of how you can use the "Hide" and "Reveal" actions in a simple scenario:

Let's say you have a game where the player needs to collect coins. Initially, all the coins are visible on the screen. However, when the player collects a coin, you want that specific coin to disappear.

1. Create an event that triggers when the player character collides with a coin.
2. Add an action to the event and choose the "Hide" action.
3. Select the coin object that collided with the player.
4. The coin will be hidden from the screen, giving the illusion of collecting it.

You can also use the "Reveal" action in another event to make the collected coins reappear if needed.

:::tip

Remember to test your game to ensure the hide and reveal actions are working as expected.

:::

That's it! Now you have an understanding of how to hide and reveal objects in GDevelop. This feature can be useful for creating dynamic gameplay experiences and controlling the visibility of objects based on various conditions.
