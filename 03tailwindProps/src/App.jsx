import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  let obj1 = {
    name: "Subham Bhandari",
    description:
      "Hello! My name is Subham Bhandari. Its ggod to see you all. Feel free to explore my profile.",
  };

  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl p-4 m-2">
        Hello world!
      </h1>

      <Card user1={obj1} />
      <Card />
      <Card />
    </>
  );
}

export default App;
