import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("#DEC5E3");

  return (
    <>
      {/* <h1 className=" bg-red-300 p-3 rounded-xl text-black inline-block">
        Hello!
      </h1> */}
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setcolor("#AABD8C")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#AABD8C" }}
            >
              Olivine
            </button>
            <button
              onClick={() => setcolor("#815355")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#815355" }}
            >
              Rose taupe
            </button>
            <button
              onClick={() => setcolor("#F3E5AB")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#F3E5AB" }}
            >
              Vanilla
            </button>
            <button
              onClick={() => setcolor("#1B998B")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#1B998B" }}
            >
              Persian green
            </button>
            <button
              onClick={() => setcolor("#B6DCFE")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#B6DCFE" }}
            >
              Uranian blue
            </button>
            <button
              onClick={() => setcolor("#1F363D")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#1F363D" }}
            >
              Gunmetal
            </button>
            <button
              onClick={() => setcolor("pink")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setcolor("#EF476F")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#EF476F" }}
            >
              Crayola
            </button>
            <button
              onClick={() => setcolor("#FFD166")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "#FFD166" }}
            >
              Sunglow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
