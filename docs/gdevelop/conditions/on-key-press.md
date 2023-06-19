---
id: on-key-press
title: On Key press
sidebar_position: 3
---

# On Key press

The "On Key press" condition in Gdevelop allows you to trigger events when a specific key or combination of keys is pressed.

## Adding the On Key press Condition

To add the "On Key press" condition to an event, follow these steps:

1. Open the [Events Editor](../events-editor-view.md) by selecting a scene and clicking on the "Events" tab.
2. Click on the "+" button to add a new event or select an existing event.
3. In the event, click on the "+" button in the conditions section to add a new condition.
4. Search for "On Key press" in the conditions list and select it.

## Configuring the On Key press Condition

After adding the "On Key press" condition, you can configure it to detect specific key presses:

1. Select the "On Key press" condition in the event.
2. In the properties panel, you will find the following options:
   - **Key**: Specify the key that should trigger the event. You can choose from a list of available keys or enter a custom key code.
   - **Modifier**: Optionally, you can select a modifier key such as Shift, Ctrl, or Alt to be held while pressing the main key.
   - **Trigger once**: By default, the event will trigger every frame that the key is pressed. Enable this option if you want the event to trigger only once when the key is initially pressed.

## Example

Here's an example of using the "On Key press" condition:

```gd
Conditions:
  On Key press:
    Key: Space
    Trigger once: true

Actions:
  Create object "Bullet" at (Player.X, Player.Y)
```

In this example, when the Space key is pressed, a bullet object is created at the position of the player object.

## Summary

The "On Key press" condition is a powerful tool in Gdevelop for detecting specific key presses and triggering events accordingly. It allows you to create interactive gameplay mechanics based on user input.

Experiment with different key combinations and actions to create dynamic and engaging experiences in your game.
