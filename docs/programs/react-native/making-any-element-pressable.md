---
id: doc5
title: Making Any Element Pressable
---

As mentioned in a previous section, the `<View>` tag is how a developer defines sections within their React Native application. The one downside of using this tag is that you cannot add any event handlers to respond to the user touching these sections. For example a `<Button>` component can have the `onPress` event handler as a prop so that the developer can decide what action should be taken when the button is pressed. Sometimes, the view tag is used to create elements that will need to react to being pressed by the user. In these instances the `<TouchableHighlight>` and `<TouchableOpacity>` tags should be used instead of the standard `<View>` tag. These will allow for an onPress event handler so that any element can react to being pressed. One limitation of the `<TouchableHighlight>` tag is that it can have ONLY one child. Additionally, it is not possible to make a `<TouchableHighlight>` tag a child within another `<TouchableHighlight>` tag. If there is ever a need to have multiple pressable elements within one confined element then use both `<TouchableHighlight>` and `<TouchableOpacity>` tags with one being the child of the other.

