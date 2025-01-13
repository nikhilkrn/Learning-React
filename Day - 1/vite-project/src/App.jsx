import Square from "./Square.jsx";
import Circle from "./Circle.jsx";
function App() {
  // let jsx = <h1>Hello Everyone</h1>
  return (
    <div
      style={{
        border: "10px solid black",
        backgroundColor: "black",
        height: "100vh",
      }}
    >
      <div style={{display:"flex"}}>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <div style={{display:"flex"}}>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </div>
    </div>
  );
}

export default App;
