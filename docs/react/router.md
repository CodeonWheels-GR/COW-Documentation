---
id: doc13
title: React Router
---

*** React router image https://res.cloudinary.com/practicaldev/image/fetch/s--vtI2NHvd--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q0lj87mz6whntv2zbxdm.png ***

The React router is how a developer can navigate in between individual pages. First the command `npm i -D react-router-dom` must be run to allow the use of the React router.

Imagine now our project has a folder called pages with the following files within it:

```
landing.js
about.js
contact.js
help.js
```

To navigate between these pages we first would need to set up the routes in the React app's root file where all components are rendered. This file is likely called `index.js` or `app.js` Look at this example of adding routes:

```
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Help from "./pages/Help";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/help" component={Help} />
    </Router>
  );
}
```

Now say we are on the landing page and want to set up a hyperlink that send the user to the help page. We would use the `<Link>` component to set up the hyperlink like so:
```
<Link to="/help">Help</Link>
```

When the text `help` is clicked. The user will be navigated to the help page









