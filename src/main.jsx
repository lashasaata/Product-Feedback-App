import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route } from "react-router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);

// ReactDOM.render(
//   <Router>
//     <Route path="/" component={App}></Route>
//   </Router>,
//   document.getElementById("app")
// );
