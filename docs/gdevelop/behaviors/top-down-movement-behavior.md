---
id: top-down-movement-behavior
title: Top Down Movement Behavior
sidebar_position: 6
---

# Top Down Movement Behavior

The Top Down Movement behavior in Gdevelop allows objects to move freely in any direction within a scene. This behavior is commonly used in top-down or isometric games where the character or objects can move in multiple directions.

To add the Top Down Movement behavior to an object, follow these steps:

1. Select the object you want to apply the behavior to in the **Scene Editor** view.
2. In the **Object Properties** panel, click on the **Behaviors** tab.
3. Click the **Add a new behavior** button.
4. From the list of available behaviors, choose **Top Down Movement**.
5. Customize the behavior's properties according to your game's requirements.

Once the Top Down Movement behavior is added, you can configure various settings to control the object's movement:

- **Speed**: Adjusts the movement speed of the object.
- **Acceleration**: Controls how quickly the object accelerates when moving.
- **Deceleration**: Determines how fast the object slows down when not moving.
- **Angular speed**: Sets the rotational speed of the object.

In addition to the basic movement controls, the Top Down Movement behavior provides additional features like obstacle avoidance, grid movement, and more. You can explore these features in the behavior's properties and configure them based on your game's needs.

## Example Usage

To illustrate the usage of the Top Down Movement behavior, let's consider a simple scenario where you have a player character that can move around a maze-like environment. By adding the Top Down Movement behavior to the player object, you can enable the player to navigate through the maze using arrow keys or touch controls.

Here's a basic example of how you could handle the movement controls using events in Gdevelop:

```plaintext
Conditions:
  - Keyboard Up key is pressed

Actions:
  - Change the player's Y position by (-Player.TopDownMovement.Speed * TimeDelta())

Conditions:
  - Keyboard Down key is pressed

Actions:
  - Change the player's Y position by (Player.TopDownMovement.Speed * TimeDelta())

Conditions:
  - Keyboard Left key is pressed

Actions:
  - Change the player's X position by (-Player.TopDownMovement.Speed * TimeDelta())

Conditions:
  - Keyboard Right key is pressed

Actions:
  - Change the player's X position by (Player.TopDownMovement.Speed * TimeDelta())
```

In this example, pressing the arrow keys triggers the corresponding actions that modify the player's position based on the Top Down Movement behavior's speed and the current frame's time delta.

Experiment with the behavior's settings and event conditions to create smooth and responsive top-down movement for your game characters or objects.

## Conclusion

The Top Down Movement behavior in Gdevelop simplifies the implementation of smooth and flexible movement for objects in top-down or isometric games. By utilizing this behavior and customizing its properties, you can create dynamic and interactive gameplay experiences. Experiment with different settings and combine the behavior with other Gdevelop features to bring your game ideas to life!
