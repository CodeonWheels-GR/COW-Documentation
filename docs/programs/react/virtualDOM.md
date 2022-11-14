---
id: doc3
title: What is the Virtual DOM?
---

The virtual DOM is a lightweight representation of the actual DOM

## How does the virtual DOM work?

React keeps a snapshot of what the virtual DOM looks like. When something changes within your webpage a new snapshot is created and compared to the previous snapshot of the virtual DOM. React then analyzes the changes made and adjusts only those changes. From there, these changes are pushed to the real DOM. This is much more resource efficient than continously changing the real DOM