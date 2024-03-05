import Chai from "./chai";

function App() {
  const username = "Subham Bhandari";

  return (
    <>
      <center>
        <p>Hello! This is {username}</p>{" "}
        {/* {username} is evaluated expression */}
        <Chai />
      </center>
      <p>Outside center tag.</p>
    </>
  );
}

export default App;
