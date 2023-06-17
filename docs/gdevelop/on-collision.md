---
id: on-collision
title: On Collision
sidebar_position: 34
---

# On Collision

The "On Collision" condition in Gdevelop allows you to trigger events when two objects collide with each other in your game. This can be useful for implementing various gameplay mechanics, such as detecting when a player character touches an enemy or when a projectile hits a target.

To use the "On Collision" condition, follow these steps:

1. Open the Events Editor by double-clicking on a scene or using the toolbar button.

2. Click on the "Add a new condition" button to create a new condition.

3. In the condition panel, select the object that you want to check for collisions with.

4. Choose the "On Collision" condition from the list of available conditions.

5. Specify the second object that you want to check for collisions with.

6. Optionally, you can add additional conditions to further refine when the collision event should be triggered. For example, you might want to check if the collision occurs at a specific position or if certain conditions are met.

7. Once you have set up the "On Collision" condition, you can add actions to be executed when the collision event occurs. These actions can include things like playing a sound effect, reducing the player's health, or spawning particles.

Here's an example of how the event sheet might look with an "On Collision" event:

```gd
Conditions:
  - PlayerCharacter is in collision with Enemy

Actions:
  - Subtract 10 from PlayerCharacter's health
  - Play sound effect "explosion.ogg"
  - Spawn particles at PlayerCharacter's position
```

By using the "On Collision" condition effectively, you can create dynamic and interactive gameplay experiences in your Gdevelop projects.
