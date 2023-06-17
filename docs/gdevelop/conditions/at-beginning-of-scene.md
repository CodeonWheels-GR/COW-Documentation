---
id: at-beginning-of-scene
title: At Beginning of Scene
sidebar_position: 2
---

# At Beginning of Scene

The "At Beginning of Scene" event in GDevelop is a condition that triggers actions when a specific scene starts or restarts. This event is useful for initializing variables, setting up the initial state of objects, or performing any other tasks that need to be done when a scene begins.

## Usage

To use the "At Beginning of Scene" event, follow these steps:

1. Open the Events Editor by double-clicking on a scene or using the toolbar button.
2. Click on the "Add event" button to create a new event.
3. In the conditions section, select "Scene" and then choose "At the beginning of the scene."
4. Add any additional conditions if necessary.
5. Add the desired actions that should be executed when the scene starts.

## Example

Let's say you have a game with multiple levels, and you want to display a welcome message when each level starts. You can use the "At Beginning of Scene" event to achieve this. Here's an example of how you can set it up:

1. Create a text object in your scene and position it where you want the welcome message to appear.
2. In the Events Editor, add the "At Beginning of Scene" condition for the desired scene.
3. Add an action to show the welcome message, such as changing the visibility of the text object to visible.
4. Customize the welcome message by changing the text content of the text object.

Now, whenever the specified scene starts or restarts, the welcome message will be displayed.

## Tips

- You can use the "At Beginning of Scene" event multiple times within a scene to trigger different actions at different points in the scene.
- Combine the "At Beginning of Scene" event with other conditions and actions to create complex behaviors that are specific to certain scenes.

That's it! You now know how to use the "At Beginning of Scene" event in GDevelop to execute actions when a scene starts or restarts.
