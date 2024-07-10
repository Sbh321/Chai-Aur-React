function customRender(reactElement, mainCont) {
  // const domElement = document.createElement(reactElement.type);
  // domElement.innerHTML = reactElement.children;
  // domElement.setAttribute("target", reactElement.props.target);
  // domElement.setAttribute("href", reactElement.props.href);
  // mainCont.appendChild(domElement);
  // Making the above code more modular and efficient

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop == "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  mainCont.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainCont = document.querySelector("#root");

customRender(reactElement, mainCont);
