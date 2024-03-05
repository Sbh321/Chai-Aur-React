import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(15);

  const add = () => {
    if (counter < 20) {
      setcounter(counter + 1);
      console.log(counter);
    }
  };

  function sub() {
    if (counter > 0) {
      setcounter(counter - 1);
      console.log(counter);
    }
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <p>Counter value: {counter}</p>
      <button onClick={add}>Add value</button>
      <button onClick={sub}>Sub value</button>
      <p>Counter value: {counter}</p>
      <p>Counter value: {counter}</p>
      <p>Counter value: {counter}</p>
      <p>Counter value: {counter}</p>
    </>
  );
}

export default App;
