---
id: doc3
title: What is the Virtual DOM?
---

The virtual DOM is a lightweight representation of the actual DOM. Without a virtual DOM, the entire real DOM will need to be updated with every minor change that is made to it. This is incredibly inefficient which led to the developent of the virtual DOM.

## How does the virtual DOM work?

React keeps a snapshot of what the virtual DOM looks like. When something changes within your webpage a new snapshot is created and compared to the previous snapshot of the virtual DOM. React then analyzes the changes made through a process called diffing and adjusts only those changes. From there, these changes are pushed to the real DOM, which manipulates what the user sees on screen. This is much more resource efficient than continously changing the real DOM.

*** image of how virtual DOM works https://miro.medium.com/max/1024/0*_C52yYMRTDuMtdBA ***
