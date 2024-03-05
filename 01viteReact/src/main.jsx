import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// //to create an element in react

// const reactElement = React.createElement(
//   "a",
//   { href: "google.com", target: "_blank" },
//   "click to visit google!"
// );

// ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
