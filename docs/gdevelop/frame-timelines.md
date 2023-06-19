---
id: frame-timelines
title: Frame Timelines
sidebar_position: 12
---

# Frame Timelines

In Gdevelop, frame timelines are used to create animations for objects. Animations are a sequence of frames that play in a specific order to give the illusion of movement. Frame timelines allow you to control the timing and appearance of these animations.

## Adding Frame Timelines

To add a frame timeline to an object, follow these steps:

1. Select the object in the [Scene Editor](./scene-editor.md).
2. In the Object Properties panel, locate the "Animations" section.
3. Click on the "+" button to add a new animation.
4. Give the animation a name to identify it.
5. Specify the duration of each frame in milliseconds.
6. Upload or choose the frames to include in the animation.
7. Adjust the order of the frames if necessary.
8. Save your changes.

## Editing Frame Timelines

Once you've added a frame timeline, you can edit its properties and frames:

- **Name**: You can change the name of the animation to make it more descriptive.
- **Duration**: Adjust the duration of each frame to control the speed of the animation.
- **Frames**: Add, remove, or reorder frames within the animation.

## Playing Frame Timelines

To play an animation in your game, you can use events to trigger the animation:

1. Open the [Events Editor](./events-editor-view.md).
2. Create an event that triggers the animation.
3. Use the appropriate action to play the animation on the desired object.
4. Specify the name of the animation to play.

```gd
// Example: Play an animation on a sprite object
Conditions:
  - Object: [Sprite Object]
Actions:
  - Sprite: Play animation
    Animation: "Walk" // Replace with your animation name
```
