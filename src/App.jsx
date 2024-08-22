import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  const addValue = () => {
    if (counter >= 20) {
      alert("Counter Value can not be more than 20");
    } else setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter <= 0) {
      alert("Counter Value can not be less than 0");
    } else setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <h3>Current Counter Value : {counter}</h3>

      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
}

export default App;
